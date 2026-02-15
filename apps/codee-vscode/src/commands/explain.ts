import * as vscode from "vscode";
import { EngineClient } from "../services/engine-client";

export async function explainSelectedCommand(engine: EngineClient): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage("No active editor.");
    return;
  }

  const selection = editor.document.getText(editor.selection);
  if (!selection) {
    vscode.window.showInformationMessage("Select code to explain.");
    return;
  }

  await engine.explainSelection(selection, editor.document.languageId);
}
