import * as vscode from "vscode";
import { getNonce } from "../utils/webview";
import { EngineHost } from "../bridge/EngineHost";

export class OnboardingPanel {
  private panel?: vscode.WebviewPanel;

  constructor(
    private readonly extensionUri: vscode.Uri,
    private readonly context: vscode.ExtensionContext,
    private readonly engineHost: EngineHost
  ) {}

  async show(): Promise<void> {
    if (this.panel) {
      this.panel.reveal();
      return;
    }

    this.panel = vscode.window.createWebviewPanel(
      "codee.onboarding",
      "Welcome to Codee",
      vscode.ViewColumn.One,
      { enableScripts: true, localResourceRoots: [this.extensionUri] }
    );

    this.panel.webview.html = this.getHtml(this.panel.webview);
    this.panel.webview.onDidReceiveMessage((message) => this.handleMessage(message));
    this.panel.onDidDispose(() => {
      this.panel = undefined;
    });

    await this.pushState();
  }

  async complete(): Promise<void> {
    await this.context.globalState.update("codee.onboardingCompleted", true);
  }

  async shouldShow(): Promise<boolean> {
    return !this.context.globalState.get<boolean>("codee.onboardingCompleted", false);
  }

  private getHtml(webview: vscode.Webview): string {
    const nonce = getNonce();

    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Codee Onboarding</title>
    <style>
      body { font-family: var(--vscode-font-family); color: var(--vscode-foreground); background: var(--vscode-editor-background); padding: 20px; }
      .card { border: 1px solid var(--vscode-panel-border); border-radius: 8px; padding: 16px; margin-bottom: 16px; background: var(--vscode-editor-background); }
      .title { font-size: 18px; margin: 0 0 8px 0; }
      .row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
      .status { font-size: 12px; opacity: 0.8; }
    </style>
  </head>
  <body>
    <h1>Welcome to Codee</h1>
    <div class="card">
      <h2 class="title">1. Check Ollama</h2>
      <div id="ollama-status" class="status">Checking...</div>
      <div class="row">
        <vscode-button id="check-ollama">Re-check</vscode-button>
        <vscode-button id="install-ollama" appearance="secondary">Install Ollama</vscode-button>
      </div>
    </div>

    <div class="card">
      <h2 class="title">2. Download a Model</h2>
      <div class="row">
        <vscode-text-field id="model-id" value="wizardcoder"></vscode-text-field>
        <vscode-button id="download-model">Download</vscode-button>
      </div>
    </div>

    <div class="card">
      <h2 class="title">3. Scan Your Project</h2>
      <div class="status">Index your workspace for faster context.</div>
      <div class="row">
        <vscode-button id="scan-project">Start Scan</vscode-button>
      </div>
    </div>

    <div class="card">
      <h2 class="title">4. Configure Preferences</h2>
      <div class="row">
        <vscode-button id="open-settings">Open Settings</vscode-button>
        <vscode-button id="open-keybindings" appearance="secondary">Keybindings</vscode-button>
      </div>
    </div>

    <div class="card">
      <h2 class="title">5. Explore Capabilities</h2>
      <div class="row">
        <vscode-button id="open-help">Open Help Panel</vscode-button>
        <vscode-button id="open-chat" appearance="secondary">Open Chat</vscode-button>
      </div>
    </div>

    <div class="row">
      <vscode-button id="finish">Finish</vscode-button>
    </div>

    <script nonce="${nonce}">
      const vscode = acquireVsCodeApi();
      const statusNode = document.getElementById("ollama-status");

      document.getElementById("check-ollama").addEventListener("click", () => vscode.postMessage({ type: "checkOllama" }));
      document.getElementById("install-ollama").addEventListener("click", () => vscode.postMessage({ type: "installOllama" }));
      document.getElementById("download-model").addEventListener("click", () => {
        const modelId = document.getElementById("model-id").value;
        vscode.postMessage({ type: "downloadModel", modelId });
      });
      document.getElementById("scan-project").addEventListener("click", () => vscode.postMessage({ type: "scanProject" }));
      document.getElementById("open-settings").addEventListener("click", () => vscode.postMessage({ type: "openSettings" }));
      document.getElementById("open-keybindings").addEventListener("click", () => vscode.postMessage({ type: "openKeybindings" }));
      document.getElementById("open-help").addEventListener("click", () => vscode.postMessage({ type: "openHelp" }));
      document.getElementById("open-chat").addEventListener("click", () => vscode.postMessage({ type: "openChat" }));
      document.getElementById("finish").addEventListener("click", () => vscode.postMessage({ type: "finish" }));

      window.addEventListener("message", (event) => {
        if (event.data.type === "ollamaStatus") {
          statusNode.textContent = event.data.installed
            ? "Ollama detected."
            : "Ollama not found. Install to continue.";
        }
      });

      vscode.postMessage({ type: "checkOllama" });
    </script>
  </body>
</html>`;
  }

  private async handleMessage(message: { type: string; modelId?: string }): Promise<void> {
    if (message.type === "checkOllama") {
      const installed = await checkOllamaInstalled();
      this.panel?.webview.postMessage({ type: "ollamaStatus", installed });
      return;
    }

    if (message.type === "installOllama") {
      await openOllamaInstall();
      return;
    }

    if (message.type === "downloadModel") {
      const modelId = message.modelId ?? "wizardcoder";
      await downloadModel(modelId);
      return;
    }

    if (message.type === "scanProject") {
      const projectPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
      await this.engineHost.startIndexingNow(projectPath);
      vscode.window.showInformationMessage("Indexing started.");
      return;
    }

    if (message.type === "openSettings") {
      await vscode.commands.executeCommand("codee.openSettings");
      return;
    }

    if (message.type === "openKeybindings") {
      await vscode.commands.executeCommand("workbench.action.openGlobalKeybindings");
      return;
    }

    if (message.type === "openHelp") {
      await vscode.commands.executeCommand("codee.openHelp");
      return;
    }

    if (message.type === "openChat") {
      await vscode.commands.executeCommand("codee.chat.focus");
      return;
    }

    if (message.type === "finish") {
      await this.complete();
      this.panel?.dispose();
    }
  }

  private async pushState(): Promise<void> {
    const installed = await checkOllamaInstalled();
    this.panel?.webview.postMessage({ type: "ollamaStatus", installed });
  }
}

async function checkOllamaInstalled(): Promise<boolean> {
  try {
    const cp = await import("node:child_process");
    return await new Promise((resolve) => {
      const child = cp.spawn("ollama", ["--version"]);
      child.on("error", () => resolve(false));
      child.on("exit", (code) => resolve(code === 0));
    });
  } catch {
    return false;
  }
}

async function openOllamaInstall(): Promise<void> {
  const url = vscode.Uri.parse("https://ollama.com/download");
  await vscode.env.openExternal(url);
}

async function downloadModel(modelId: string): Promise<void> {
  const terminal = vscode.window.createTerminal("Codee: Ollama");
  terminal.show();
  terminal.sendText(`ollama pull ${modelId}`);
}
