import * as vscode from "vscode";
import { EngineHost } from "../bridge/EngineHost";
import { ChatPanel } from "../panels/chat-panel";

const SUPPORTED_LANGUAGES = ["python", "typescript", "rust", "go", "java", "cpp"] as const;

type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export class LearningModeService implements vscode.Disposable {
  private enabled: boolean;
  private readonly disposables: vscode.Disposable[] = [];
  private readonly lastSuggestion = new Map<string, string>();

  constructor(
    private readonly engineHost: EngineHost,
    private readonly context: vscode.ExtensionContext,
    private readonly chatPanel: ChatPanel
  ) {
    this.enabled = context.globalState.get<boolean>("codee.learningMode.enabled") ?? false;
    this.disposables.push(
      vscode.workspace.onDidSaveTextDocument((doc) => void this.handleDocument(doc))
    );
  }

  dispose(): void {
    this.disposables.forEach((item) => item.dispose());
    this.disposables.length = 0;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  async setEnabled(next: boolean): Promise<void> {
    this.enabled = next;
    await this.context.globalState.update("codee.learningMode.enabled", next);
  }

  async toggle(): Promise<boolean> {
    const next = !this.enabled;
    await this.setEnabled(next);
    return next;
  }

  private async handleDocument(document: vscode.TextDocument): Promise<void> {
    if (!this.enabled) {
      return;
    }
    if (!SUPPORTED_LANGUAGES.includes(document.languageId as SupportedLanguage)) {
      return;
    }

    const text = document.getText();
    const patterns = this.engineHost.detectPatterns(text, document.languageId as SupportedLanguage);
    const conceptIds = patterns.flatMap((pattern) => mapPatternToConcept(pattern.id));

    if (text.toLowerCase().includes("mutex") || text.toLowerCase().includes("lock")) {
      conceptIds.push("concurrency.mutex");
    }

    const uniqueConcepts = Array.from(new Set(conceptIds));
    if (uniqueConcepts.length === 0) {
      return;
    }

    const conceptId = uniqueConcepts[0];
    if (!conceptId) {
      return;
    }
    if (this.lastSuggestion.get(document.uri.toString()) === conceptId) {
      return;
    }

    this.lastSuggestion.set(document.uri.toString(), conceptId);

    const concepts = this.engineHost.listConcepts();
    const concept = concepts.find((item) => item.id === conceptId);
    if (!concept) {
      return;
    }

    const implementations =
      (this.engineHost.listConceptImplementations()[conceptId] ?? []) as Array<{ language: string; snippet: string }>;
    const target = pickTargetLanguage(document.languageId as SupportedLanguage, implementations);
    const example = implementations.find((impl: { language: string }) => impl.language === target);

    const message = example
      ? `You used ${concept.name} in ${document.languageId}. Here's how in ${target}:\n${example.snippet}`
      : `You used ${concept.name} in ${document.languageId}. Open Pattern Explorer to compare languages.`;

    const choice = await vscode.window.showInformationMessage(
      message,
      { modal: false },
      "Add to Learning Queue",
      "Open Pattern Explorer"
    );

    if (choice === "Add to Learning Queue") {
      const current = this.context.globalState.get<string[]>("codee.webview.learningQueue") ?? [];
      const next = current.includes(conceptId) ? current : [...current, conceptId];
      await this.context.globalState.update("codee.webview.learningQueue", next);
      this.chatPanel.updateLearningQueue(next);
    }

    if (choice === "Open Pattern Explorer") {
      this.chatPanel.showPatternExplorer({ selectedConceptId: conceptId });
    }
  }
}

function pickTargetLanguage(source: SupportedLanguage, implementations: Array<{ language: string }>): string {
  const preferred = ["java", "cpp", "go", "rust", "typescript", "python"];
  for (const language of preferred) {
    if (language === source) {
      continue;
    }
    if (implementations.some((impl) => impl.language === language)) {
      return language;
    }
  }
  return implementations.find((impl) => impl.language !== source)?.language ?? "rust";
}

function mapPatternToConcept(patternId: string): string[] {
  switch (patternId) {
    case "list-comprehension":
      return ["data-structures.list"];
    case "decorator":
      return ["paradigms.decorators"];
    case "async-await":
      return ["control-flow.async-await"];
    case "dataclass":
      return ["paradigms.dataclasses"];
    case "error-handling":
      return ["control-flow.exceptions"];
    default:
      return [];
  }
}
