import * as vscode from "vscode";
import { EngineHost } from "../bridge/EngineHost";

const LANGUAGE_PREVIEW_MAP: Record<string, "python" | "typescript" | "rust" | "go" | "java" | "cpp"> = {
  python: "typescript",
  typescript: "python",
  rust: "typescript",
  go: "typescript",
  java: "typescript",
  cpp: "typescript"
};

export class HoverProvider implements vscode.HoverProvider {
  constructor(private readonly engineHost: EngineHost) {}

  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.Hover | undefined {
    const languageId = document.languageId;
    if (!LANGUAGE_PREVIEW_MAP[languageId]) {
      return undefined;
    }

    const line = document.lineAt(position.line).text.trim();
    if (!line) {
      return undefined;
    }

    const targetLanguage = LANGUAGE_PREVIEW_MAP[languageId];
    const result = this.engineHost.translateCode(
      languageId as "python" | "typescript" | "rust" | "go" | "java" | "cpp",
      targetLanguage,
      line
    );

    const markdown = new vscode.MarkdownString();
    markdown.appendMarkdown(`Equivalent in ${targetLanguage}:\n`);
    markdown.appendCodeblock(result.output.slice(0, 200), targetLanguage);
    markdown.appendMarkdown("\n[Open comparison](command:codee.compareLanguages)");
    markdown.isTrusted = true;

    return new vscode.Hover(markdown);
  }
}
