import * as vscode from "vscode";
import { getNonce } from "../utils/webview";

export class HelpPanel {
  private panel?: vscode.WebviewPanel;

  constructor(private readonly extensionUri: vscode.Uri) {}

  show(): void {
    if (this.panel) {
      this.panel.reveal();
      return;
    }

    this.panel = vscode.window.createWebviewPanel(
      "codee.help",
      "Codee Help",
      vscode.ViewColumn.One,
      { enableScripts: true, localResourceRoots: [this.extensionUri] }
    );

    this.panel.webview.html = this.getHtml(this.panel.webview);
    this.panel.webview.onDidReceiveMessage((message) => this.handleMessage(message));
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
    <title>Codee Help</title>
    <style>
      body { font-family: var(--vscode-font-family); color: var(--vscode-foreground); background: var(--vscode-editor-background); padding: 20px; }
      .card { border: 1px solid var(--vscode-panel-border); border-radius: 8px; padding: 16px; margin-bottom: 16px; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; }
      .small { font-size: 12px; opacity: 0.8; }
    </style>
  </head>
  <body>
    <h1>Codee Help</h1>
    <div class="card">
      <h2>Getting Started</h2>
      <div class="row">
        <vscode-button id="open-docs">Open Documentation</vscode-button>
        <vscode-button id="open-feedback" appearance="secondary">Send Feedback</vscode-button>
        <vscode-button id="open-onboarding" appearance="secondary">Open Onboarding</vscode-button>
      </div>
    </div>
    <div class="card">
      <h2>Video Tutorials</h2>
      <p class="small">Video tutorials are coming soon.</p>
      <div class="row">
        <vscode-button id="video-intro" appearance="secondary">Intro Video (placeholder)</vscode-button>
        <vscode-button id="video-workflows" appearance="secondary">Workflow Deep Dive (placeholder)</vscode-button>
      </div>
    </div>
    <div class="card">
      <h2>Commands</h2>
      <p class="small">Try: Codee: Start New Session, Explain Selected Code, Generate Unit Tests.</p>
    </div>
    <script nonce="${nonce}">
      const vscode = acquireVsCodeApi();
      document.getElementById("open-docs").addEventListener("click", () => vscode.postMessage({ type: "openDocs" }));
      document.getElementById("open-feedback").addEventListener("click", () => vscode.postMessage({ type: "openFeedback" }));
      document.getElementById("open-onboarding").addEventListener("click", () => vscode.postMessage({ type: "openOnboarding" }));
      document.getElementById("video-intro").addEventListener("click", () => vscode.postMessage({ type: "video" }));
      document.getElementById("video-workflows").addEventListener("click", () => vscode.postMessage({ type: "video" }));
    </script>
  </body>
</html>`;
  }

  private async handleMessage(message: { type: string }): Promise<void> {
    if (message.type === "openDocs") {
      await vscode.commands.executeCommand("codee.openDocumentation");
      return;
    }
    if (message.type === "openFeedback") {
      await vscode.commands.executeCommand("codee.openFeedback");
      return;
    }
    if (message.type === "openOnboarding") {
      await vscode.commands.executeCommand("codee.openOnboarding");
    }
  }
}
