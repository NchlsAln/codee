import * as vscode from "vscode";
import { getNonce } from "../utils/webview";

export class ProjectPanel {
  private panel?: vscode.WebviewPanel;

  constructor(private readonly extensionUri: vscode.Uri) {}

  show(): void {
    if (this.panel) {
      this.panel.reveal();
      return;
    }

    this.panel = vscode.window.createWebviewPanel(
      "codee.project",
      "Codee Project Overview",
      vscode.ViewColumn.One,
      { enableScripts: true, localResourceRoots: [this.extensionUri] }
    );

    this.panel.webview.html = this.getHtml(this.panel.webview);
    this.panel.onDidDispose(() => {
      this.panel = undefined;
    });
  }

  private getHtml(webview: vscode.Webview): string {
    const nonce = getNonce();
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Codee Project Overview</title>
  </head>
  <body>
    <h2>Project Overview</h2>
    <p>Project overview UI placeholder.</p>
  </body>
</html>`;
  }
}
