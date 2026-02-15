import * as vscode from "vscode";
import { TextDecoder } from "util";
import { ChatController } from "../bridge/ChatController";
import { ContextProvider } from "../bridge/ContextProvider";
import { CodeActionHandler } from "../webview/CodeActionHandler";
import { FileMentionProvider } from "../webview/FileMentionProvider";
import { SymbolMentionProvider } from "../webview/SymbolMentionProvider";
import { WebviewMessageHandler } from "../webview/WebviewMessageHandler";
import { WebviewStateManager } from "../webview/WebviewStateManager";

export class ChatPanel implements vscode.WebviewViewProvider {
  private view?: vscode.WebviewView;
  private handler?: WebviewMessageHandler;
  private stateManager?: WebviewStateManager;

  constructor(
    private readonly extensionUri: vscode.Uri,
    private readonly chatController: ChatController,
    private readonly contextProvider: ContextProvider,
    private readonly extensionContext: vscode.ExtensionContext
  ) {}

  resolveWebviewView(view: vscode.WebviewView): void {
    this.view = view;
    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    };

    this.handler?.dispose();
    this.stateManager = new WebviewStateManager(
      this.extensionContext,
      this.chatController,
      this.contextProvider,
      new FileMentionProvider(),
      new SymbolMentionProvider()
    );
    this.stateManager.attach(view.webview);
    this.handler = new WebviewMessageHandler(
      view.webview,
      this.chatController,
      this.contextProvider,
      new CodeActionHandler(),
      this.stateManager
    );

    void this.loadHtml(view.webview);
    void this.stateManager.restoreState();
    void this.stateManager.sendInitialState();

    view.onDidChangeVisibility(() => {
      if (view.visible) {
        void this.stateManager?.sendInitialState();
      }
    });

    this.extensionContext.subscriptions.push(
      vscode.window.onDidChangeActiveColorTheme(() => this.stateManager?.updateTheme()),
      vscode.window.onDidChangeActiveTextEditor(() => void this.stateManager?.updateContext())
    );
  }

  showSystemMessage(text: string): void {
    this.stateManager?.postMessage({ type: "streamError", messageId: "system", error: text });
  }

  private async loadHtml(webview: vscode.Webview): Promise<void> {
    const htmlUri = vscode.Uri.joinPath(this.extensionUri, "dist", "webview", "index.html");
    const bytes = await vscode.workspace.fs.readFile(htmlUri);
    const template = new TextDecoder().decode(bytes);

    const nonce = getNonce();
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "dist", "webview", "index.js")
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this.extensionUri, "dist", "webview", "index.css")
    );

    const csp = [
      "default-src 'none'",
      `img-src ${webview.cspSource} https: data:`,
      `style-src ${webview.cspSource}`,
      `script-src 'nonce-${nonce}'`,
      `font-src ${webview.cspSource}`,
      "connect-src 'none'"
    ].join("; ");

    webview.html = template
      .replace("{{csp}}", csp)
      .replace("{{nonce}}", nonce)
      .replace("{{scriptUri}}", scriptUri.toString())
      .replace("{{styleUri}}", styleUri.toString());
  }
}

function getNonce(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let nonce = "";
  for (let i = 0; i < 32; i += 1) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce;
}
