import * as vscode from "vscode";
import { EngineClient } from "../services/engine-client";

export async function generateTestsCommand(engine: EngineClient): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage("No active editor.");
    return;
  }

  const selection = editor.document.getText(editor.selection);
  if (!selection) {
    vscode.window.showInformationMessage("Select code to generate tests.");
    return;
  }

  await engine.generateTests(selection, editor.document.languageId);
}
