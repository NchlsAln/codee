import * as vscode from "vscode";
import { EngineClient } from "../services/engine-client";
import { StatusBarService } from "../services/status-bar";

export async function switchLanguageModeCommand(
  engine: EngineClient,
  statusBar: StatusBarService
): Promise<void> {
  const enabled = vscode.workspace.getConfiguration("codee").get<string[]>("languages.enabled") ?? [];
  const selected = await vscode.window.showQuickPick(enabled, {
    placeHolder: "Switch Codee language mode"
  });

  if (!selected) {
    return;
  }

  engine.setLanguageMode(selected);
  statusBar.setLanguage(selected);
}
