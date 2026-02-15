import * as vscode from "vscode";

export class CodeActionHandler {
  async insertCode(code: string, position: "cursor" | "newFile" = "cursor"): Promise<void> {
    const readOnly = vscode.workspace.getConfiguration("codee").get<boolean>("features.readOnlyMode");
    if (readOnly) {
      vscode.window.showWarningMessage("Read-only mode is enabled. Code insertion is disabled.");
      return;
    }
    if (position === "newFile") {
      const doc = await vscode.workspace.openTextDocument({ content: code, language: "plaintext" });
      await vscode.window.showTextDocument(doc, { preview: false });
      vscode.window.showInformationMessage("Inserted code in a new file.");
      return;
    }

    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage("No active editor available.");
      return;
    }

    await editor.edit((editBuilder) => {
      editBuilder.insert(editor.selection.active, code);
    });
    vscode.window.showInformationMessage("Code inserted.");
  }

  async copyCode(code: string): Promise<void> {
    await vscode.env.clipboard.writeText(code);
    vscode.window.showInformationMessage("Code copied to clipboard.");
  }
}
