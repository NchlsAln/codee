import * as vscode from "vscode";
import { SettingsWebviewPanel } from "../configuration/SettingsWebviewPanel";
import { SettingsManager } from "../configuration/SettingsManager";

export class SettingsPanel {
  private readonly webview: SettingsWebviewPanel;

  constructor(extensionUri: vscode.Uri, settingsManager: SettingsManager) {
    this.webview = new SettingsWebviewPanel(extensionUri, settingsManager);
  }

  show(): void {
    this.webview.show();
  }
}
