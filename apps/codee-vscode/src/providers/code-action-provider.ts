import * as vscode from "vscode";

export class CodeActionProvider implements vscode.CodeActionProvider {
  provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] {
    if (range.isEmpty) {
      return [];
    }

    const supported = ["python", "typescript", "rust", "go", "java", "cpp"] as const;
    const source = document.languageId;
    if (!supported.includes(source as (typeof supported)[number])) {
      return [];
    }

    return supported
      .filter((target) => target !== source)
      .map((target) => {
        const action = new vscode.CodeAction(`Convert to ${target}`, vscode.CodeActionKind.RefactorRewrite);
        action.command = {
          command: "codee.convertLanguage",
          title: "Convert to language",
          arguments: [target]
        };
        return action;
      });
  }
}
