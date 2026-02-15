import * as vscode from "vscode";
import { getNonce } from "../utils/webview";
import { EngineHost } from "../bridge/EngineHost";

export class EngineInspectorPanel {
  private panel?: vscode.WebviewPanel;

  constructor(private readonly extensionUri: vscode.Uri, private readonly engineHost: EngineHost) {}

  show(): void {
    if (this.panel) {
      this.panel.reveal();
      return;
    }

    this.panel = vscode.window.createWebviewPanel(
      "codee.inspector",
      "Codee Engine Inspector",
      vscode.ViewColumn.One,
      { enableScripts: true, localResourceRoots: [this.extensionUri] }
    );

    this.panel.webview.html = this.getHtml(this.panel.webview);
    this.panel.webview.onDidReceiveMessage((message) => this.handleMessage(message));
    this.panel.onDidDispose(() => {
      this.panel = undefined;
    });

    void this.pushState();
  }

  private getHtml(webview: vscode.Webview): string {
    const nonce = getNonce();

    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Engine Inspector</title>
    <style>
      body { font-family: var(--vscode-font-family); color: var(--vscode-foreground); background: var(--vscode-editor-background); padding: 16px; }
      pre { background: var(--vscode-editor-background); border: 1px solid var(--vscode-panel-border); padding: 12px; overflow: auto; max-height: 240px; }
      .row { display: flex; gap: 8px; margin-bottom: 12px; }
      .label { font-size: 12px; opacity: 0.8; }
    </style>
  </head>
  <body>
    <h1>Engine Inspector</h1>
    <div class="row">
      <vscode-button id="refresh">Refresh</vscode-button>
      <vscode-button id="export">Export Debug Log</vscode-button>
    </div>
    <div class="label">Latest Context</div>
    <pre id="context">No context captured yet.</pre>
    <div class="label">Token Count</div>
    <pre id="tokens">0</pre>
    <div class="label">Performance Metrics</div>
    <pre id="metrics">[]</pre>

    <script nonce="${nonce}">
      const vscode = acquireVsCodeApi();
      const contextNode = document.getElementById("context");
      const tokensNode = document.getElementById("tokens");
      const metricsNode = document.getElementById("metrics");

      document.getElementById("refresh").addEventListener("click", () => vscode.postMessage({ type: "refresh" }));
      document.getElementById("export").addEventListener("click", () => vscode.postMessage({ type: "export" }));

      window.addEventListener("message", (event) => {
        if (event.data.type === "state") {
          contextNode.textContent = event.data.context || "No context captured yet.";
          tokensNode.textContent = String(event.data.tokenCount || 0);
          metricsNode.textContent = JSON.stringify(event.data.metrics || [], null, 2);
        }
      });

      vscode.postMessage({ type: "refresh" });
    </script>
  </body>
</html>`;
  }

  private async handleMessage(message: { type: string }): Promise<void> {
    if (message.type === "refresh") {
      await this.pushState();
      return;
    }
    if (message.type === "export") {
      await vscode.commands.executeCommand("codee.exportDebugLog");
    }
  }

  private async pushState(): Promise<void> {
    const debugState = this.engineHost.getDebugState();
    const metrics = this.engineHost.getPerformanceMetrics();
    this.panel?.webview.postMessage({
      type: "state",
      context: debugState?.context ?? "",
      tokenCount: debugState?.tokenCount ?? 0,
      metrics
    });
  }
}
