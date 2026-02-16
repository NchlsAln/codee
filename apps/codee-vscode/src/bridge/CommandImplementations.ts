import * as vscode from "vscode";
import path from "path";
import { EngineHost } from "./EngineHost";
import { ChatController } from "./ChatController";
import { ContextProvider } from "./ContextProvider";
import { ChatPanel } from "../panels/chat-panel";
import { TranslationReviewPanel } from "../coding-assistant/TranslationReviewPanel";
import { GitIntegration } from "../coding-assistant/GitIntegration";
import type { LanguageId } from "@codee/polyglot-knowledge";

export async function explainSelected(
  chatController: ChatController,
  contextProvider: ContextProvider
): Promise<void> {
  const selection = contextProvider.getSelectionText();
  if (!selection) {
    vscode.window.showInformationMessage("Select code to explain.");
    return;
  }

  const languageId = contextProvider.getActiveLanguageId();
  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Explaining selection",
      cancellable: false
    },
    async () => {
      const explanation = await chatController.explainSelection(selection, languageId);
      const doc = await vscode.workspace.openTextDocument({
        content: explanation,
        language: "markdown"
      });
      await vscode.window.showTextDocument(doc, { preview: true });
    }
  );
}

export async function generateUnitTests(
  chatController: ChatController,
  contextProvider: ContextProvider
): Promise<void> {
  const selection = contextProvider.getSelectionText();
  if (!selection) {
    vscode.window.showInformationMessage("Select code to generate tests.");
    return;
  }

  const languageId = contextProvider.getActiveLanguageId() ?? "typescript";
  const filePath = contextProvider.getActiveFilePath();
  const fileName = filePath ? path.basename(filePath) : "module";

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Generating tests",
      cancellable: false
    },
    async () => {
      const tests = await chatController.runGenerateTests(selection, languageId, fileName);
      const doc = await vscode.workspace.openTextDocument({
        content: tests,
        language: languageId === "python" ? "python" : "typescript"
      });
      await vscode.window.showTextDocument(doc, { preview: true });
    }
  );
}

export async function refactorSelection(
  engineHost: EngineHost,
  contextProvider: ContextProvider
): Promise<void> {
  const readOnly = vscode.workspace.getConfiguration("codee").get<boolean>("features.readOnlyMode");
  if (readOnly) {
    vscode.window.showWarningMessage("Read-only mode is enabled. Refactors are disabled.");
    return;
  }
  const editor = vscode.window.activeTextEditor;
  if (!editor || editor.selection.isEmpty) {
    vscode.window.showInformationMessage("Select code to refactor.");
    return;
  }

  const projectPath = contextProvider.getProjectPath();
  const filePath = contextProvider.getActiveFilePath();
  if (!projectPath || !filePath) {
    vscode.window.showInformationMessage("Open a workspace file to refactor.");
    return;
  }

  const selectionStart = editor.document.offsetAt(editor.selection.start);
  const selectionEnd = editor.document.offsetAt(editor.selection.end);
  const baseName = path.basename(filePath, path.extname(filePath));
  const newFile = path.join(path.dirname(filePath), `${baseName}.refactor.ts`);

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Preparing refactor",
      cancellable: false
    },
    async () => {
      const refactor = await engineHost.refactorSelection({
        projectPath,
        sourceFile: filePath,
        selectionStart,
        selectionEnd,
        exportName: `${baseName}Refactor`,
        newFile
      });

      if (refactor.changeSet.edits.length === 0) {
        vscode.window.showInformationMessage("No refactor changes generated.");
        return;
      }

      const choice = await vscode.window.showInformationMessage(
        "Apply refactor changes?",
        { modal: true },
        "Apply"
      );

      if (choice === "Apply") {
        await engineHost.applyRefactor(projectPath, refactor);
        vscode.window.showInformationMessage("Refactor applied.");
      }
    }
  );
}

export async function clearLocalData(engineHost: EngineHost): Promise<void> {
  const confirmation = await vscode.window.showWarningMessage(
    "This will delete all local Codee data for the current user. Continue?",
    { modal: true },
    "Delete"
  );

  if (confirmation !== "Delete") {
    return;
  }

  await engineHost.clearLocalData();
  vscode.window.showInformationMessage("Codee local data cleared.");
}

export async function openDocumentation(): Promise<void> {
  const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri;
  if (workspaceRoot) {
    const docsUri = vscode.Uri.joinPath(workspaceRoot, "docs", "README.md");
    try {
      const doc = await vscode.workspace.openTextDocument(docsUri);
      await vscode.window.showTextDocument(doc, { preview: true });
      return;
    } catch {
      // Fall through to external docs.
    }
  }

  const uri = vscode.Uri.parse("https://github.com/your-org/codee/tree/main/docs");
  await vscode.env.openExternal(uri);
}

export async function openFeedback(): Promise<void> {
  const uri = vscode.Uri.parse("https://github.com/your-org/codee/issues/new/choose");
  await vscode.env.openExternal(uri);
}

export async function openEngineLogs(engineHost: EngineHost): Promise<void> {
  engineHost.showLogs();
}

export async function restartEngine(engineHost: EngineHost, contextProvider: ContextProvider): Promise<void> {
  await engineHost.restart(contextProvider.getProjectPath());
  vscode.window.showInformationMessage("Codee engine restarted.");
}

export async function downloadModel(): Promise<void> {
  const model = await vscode.window.showInputBox({
    title: "Download Model",
    prompt: "Enter the Ollama model to download",
    value: "wizardcoder"
  });

  if (!model) {
    return;
  }

  const terminal = vscode.window.createTerminal("Codee: Ollama");
  terminal.show();
  terminal.sendText(`ollama pull ${model}`);
}

export async function exportDebugLog(
  engineHost: EngineHost,
  chatController: ChatController,
  contextProvider: ContextProvider
): Promise<void> {
  const debugState = engineHost.getDebugState();
  const sessionId = chatController.getSessionId();
  const messages = sessionId ? chatController.getMessages(sessionId) : [];
  const payload = {
    sessionId,
    projectPath: contextProvider.getProjectPath(),
    activeFile: contextProvider.getActiveFilePath(),
    debugState,
    messages,
    exportedAt: new Date().toISOString()
  };

  const uri = await vscode.window.showSaveDialog({
    title: "Export Codee Debug Log",
    filters: { JSON: ["json"] }
  });
  if (!uri) {
    return;
  }
  await vscode.workspace.fs.writeFile(uri, Buffer.from(JSON.stringify(payload, null, 2)));
  vscode.window.showInformationMessage("Debug log exported.");
}

export async function convertToLanguage(
  engineHost: EngineHost,
  contextProvider: ContextProvider,
  targetLanguage: "python" | "typescript" | "rust" | "go" | "java" | "cpp"
): Promise<void> {
  const readOnly = vscode.workspace.getConfiguration("codee").get<boolean>("features.readOnlyMode");
  if (readOnly) {
    vscode.window.showWarningMessage("Read-only mode is enabled. Conversion is disabled.");
    return;
  }

  const selection = contextProvider.getSelectionText();
  if (!selection) {
    vscode.window.showInformationMessage("Select code to convert.");
    return;
  }

  const sourceLanguage = contextProvider.getActiveLanguageId();
  if (
    sourceLanguage !== "python" &&
    sourceLanguage !== "typescript" &&
    sourceLanguage !== "rust" &&
    sourceLanguage !== "go" &&
    sourceLanguage !== "java" &&
    sourceLanguage !== "cpp"
  ) {
    vscode.window.showInformationMessage("Unsupported source language for conversion.");
    return;
  }

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage("No active editor available.");
    return;
  }
  const selectionRange = editor.selection;

  const config = vscode.workspace.getConfiguration("codee");
  const showSteps = config.get<boolean>("polyglot.showTranslationSteps") ?? false;
  const lineCount = selection.split(/\r?\n/).length;

  const runTranslation = async (decisions?: Record<string, string>) => {
    return engineHost.translateCode(sourceLanguage, targetLanguage, selection, {
      decisions,
      showSteps
    });
  };

  const result = lineCount > 50
    ? await vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: "Codee: Translating selection",
          cancellable: false
        },
        async () => runTranslation()
      )
    : await runTranslation();

  let finalResult = result;
  if (result.decisions && result.decisions.length > 0) {
    const selections: Record<string, string> = {};
    for (const decision of result.decisions) {
      const picked = await vscode.window.showQuickPick(decision.options, {
        title: "Translation choice",
        placeHolder: decision.prompt
      });
      if (!picked) {
        selections[decision.id] = decision.defaultOption;
      } else {
        selections[decision.id] = picked;
      }
    }
    finalResult = await runTranslation(selections);
  }

  if (finalResult.warnings && finalResult.warnings.length > 0) {
    vscode.window.showWarningMessage(finalResult.warnings.join(" "));
  }

  const output = showSteps && finalResult.steps?.length
    ? addStepComments(targetLanguage, finalResult.steps, finalResult.output)
    : finalResult.output;
  const sourceDoc = await vscode.workspace.openTextDocument({
    content: selection,
    language: sourceLanguage
  });
  const targetDoc = await vscode.workspace.openTextDocument({
    content: output,
    language: targetLanguage
  });

  await vscode.commands.executeCommand(
    "vscode.diff",
    sourceDoc.uri,
    targetDoc.uri,
    `Codee: ${sourceLanguage} → ${targetLanguage}`
  );

  const choice = await vscode.window.showInformationMessage(
    "Apply converted code to your selection?",
    { modal: true },
    "Apply",
    "Modify",
    "Reject"
  );

  if (choice === "Reject" || !choice) {
    return;
  }

  if (choice === "Modify") {
    await vscode.window.showTextDocument(targetDoc, { preview: false });
    const applyChoice = await vscode.window.showInformationMessage(
      "Edit the converted code, then choose Apply to replace the selection.",
      { modal: true },
      "Apply",
      "Cancel"
    );
    if (applyChoice !== "Apply") {
      return;
    }
  }

  const updatedContent = targetDoc.getText();
  await editor.edit((editBuilder) => {
    editBuilder.replace(selectionRange, updatedContent);
  });
  vscode.window.showInformationMessage("Conversion applied.");
}

export async function translateProject(
  engineHost: EngineHost,
  contextProvider: ContextProvider,
  extensionUri: vscode.Uri
): Promise<void> {
  const readOnly = vscode.workspace.getConfiguration("codee").get<boolean>("features.readOnlyMode");
  if (readOnly) {
    vscode.window.showWarningMessage("Read-only mode is enabled. Project translation is disabled.");
    return;
  }

  const projectRoot = contextProvider.getProjectPath();
  if (!projectRoot) {
    vscode.window.showInformationMessage("Open a workspace folder to translate.");
    return;
  }

  const languages: LanguageId[] = [
    "python",
    "typescript",
    "rust",
    "go",
    "java",
    "cpp"
  ];
  const activeLanguage = contextProvider.getActiveLanguageId();
  const preferredLanguages = activeLanguage && languages.includes(activeLanguage as typeof languages[number])
    ? [activeLanguage as typeof languages[number], ...languages.filter((lang) => lang !== activeLanguage)]
    : languages;
  const isLanguageId = (value: string): value is LanguageId => languages.includes(value as LanguageId);
  const fromSelection = await vscode.window.showQuickPick(preferredLanguages, {
    title: "Translate Project",
    placeHolder: "Select source language"
  });
  if (!fromSelection || !isLanguageId(fromSelection)) {
    return;
  }
  const from = fromSelection;
  const toSelection = await vscode.window.showQuickPick(languages.filter((lang) => lang !== from), {
    title: "Translate Project",
    placeHolder: "Select target language"
  });
  if (!toSelection || !isLanguageId(toSelection)) {
    return;
  }
  const to = toSelection;

  const defaultOutput = path.join(projectRoot, `translated-${to}`);
  const outputRoot = await vscode.window.showInputBox({
    title: "Translation Output",
    prompt: "Choose the output folder for translated files",
    value: defaultOutput
  });
  if (!outputRoot) {
    return;
  }

  const git = new GitIntegration(projectRoot);
  let baseBranch: string | undefined;
  if (await git.isGitRepo()) {
    baseBranch = await git.currentBranch();
    const clean = await git.isClean();
    if (!clean) {
      const proceed = await vscode.window.showWarningMessage(
        "Working tree has uncommitted changes. Continue with translation?",
        { modal: true },
        "Continue"
      );
      if (proceed !== "Continue") {
        return;
      }
    }
  }

  const result = await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Codee: Translating project",
      cancellable: false
    },
    async (progress) => {
      let lastProgress = 0;
      return engineHost.translateProject({
        projectRoot,
        from,
        to,
        outputRoot,
        onProgress: (message, current, total) => {
          const ratio = total > 0 ? current / total : 0;
          const increment = Math.max(0, ratio - lastProgress);
          lastProgress = ratio;
          progress.report({ message, increment });
        }
      });
    }
  );

  TranslationReviewPanel.createOrShow(extensionUri, {
    projectRoot,
    from,
    to,
    outputRoot,
    result,
    baseBranch
  });
}

function addStepComments(
  target: "python" | "typescript" | "rust" | "go" | "java" | "cpp",
  steps: string[],
  code: string
): string {
  const comment = target === "python" ? "#" : "//";
  const header = `${comment} Translation steps:\n`;
  const body = steps.map((step) => `${comment} - ${step}`).join("\n");
  return `${header}${body}\n${code}`;
}

export async function explainPattern(): Promise<void> {
  vscode.window.showInformationMessage("Pattern explanation is coming soon.");
}

export async function openLearningMode(service?: import("../coding-assistant/learning-mode-service").LearningModeService): Promise<void> {
  if (!service) {
    vscode.window.showInformationMessage("Learning mode service is unavailable.");
    return;
  }
  const enabled = await service.toggle();
  vscode.window.showInformationMessage(
    enabled ? "Learning mode enabled." : "Learning mode disabled."
  );
}

export async function openPatternExplorer(chatPanel: ChatPanel): Promise<void> {
  await vscode.commands.executeCommand("workbench.view.extension.codee");
  chatPanel.showPatternExplorer();
}

export async function compareLanguages(chatPanel: ChatPanel): Promise<void> {
  const languages: Array<"python" | "typescript" | "rust" | "go" | "java" | "cpp"> = [
    "python",
    "typescript",
    "rust",
    "go",
    "java",
    "cpp"
  ];
  const from = await vscode.window.showQuickPick(languages, {
    title: "Compare Languages",
    placeHolder: "Select source language"
  });
  if (!from) {
    return;
  }
  const to = await vscode.window.showQuickPick(languages.filter((lang) => lang !== from), {
    title: "Compare Languages",
    placeHolder: "Select target language"
  });
  if (!to) {
    return;
  }
  await vscode.commands.executeCommand("workbench.view.extension.codee");
  chatPanel.showPatternExplorer({ fromLanguage: from, toLanguage: to });
}

export async function findPattern(engineHost: EngineHost, chatPanel: ChatPanel): Promise<void> {
  const concepts = engineHost.listConcepts();
  const query = await vscode.window.showInputBox({
    title: "Find Pattern",
    prompt: "Search for a pattern by name or tag"
  });
  if (!query) {
    return;
  }
  const lowered = query.toLowerCase();
  const matches = concepts.filter(
    (concept) =>
      concept.name.toLowerCase().includes(lowered) ||
      concept.tags.some((tag) => tag.toLowerCase().includes(lowered))
  );
  if (matches.length === 0) {
    vscode.window.showInformationMessage("No matching patterns found.");
    return;
  }
  const picked = await vscode.window.showQuickPick(
    matches.map((concept) => ({ label: concept.name, description: concept.description, id: concept.id })),
    { title: "Select a pattern" }
  );
  if (!picked) {
    return;
  }
  await vscode.commands.executeCommand("workbench.view.extension.codee");
  chatPanel.showPatternExplorer({ selectedConceptId: picked.id });
}
