import * as vscode from "vscode";
import { registerCommands } from "./commands";
import { SidebarProvider } from "./providers/sidebar-provider";
import { ChatPanel } from "./panels/chat-panel";
import { SettingsPanel } from "./panels/settings-panel";
import { HelpPanel } from "./panels/help-panel";
import { OnboardingPanel } from "./panels/onboarding-panel";
import { EngineInspectorPanel } from "./panels/engine-inspector-panel";
import { SettingsManager } from "./configuration/SettingsManager";
import { StatusBarService } from "./services/status-bar";
import { CodeActionProvider } from "./providers/code-action-provider";
import { HoverProvider } from "./providers/hover-provider";
import { EngineHost } from "./bridge/EngineHost";
import { ChatController } from "./bridge/ChatController";
import { ContextProvider } from "./bridge/ContextProvider";
import { SettingsSync } from "./bridge/SettingsSync";
import { TelemetryService } from "./telemetry/TelemetryService";

export function activate(context: vscode.ExtensionContext): void {
  const engineHost = EngineHost.getInstance();
  const contextProvider = new ContextProvider();
  const projectPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  const settingsManager = new SettingsManager({ projectPath });
  const telemetry = new TelemetryService(context, settingsManager);
  const chatController = new ChatController(engineHost, contextProvider, telemetry);
  const statusBar = new StatusBarService(context, engineHost);

  const sidebarProvider = new SidebarProvider(engineHost, chatController);
  const chatPanel = new ChatPanel(context.extensionUri, chatController, contextProvider, context);
  const settingsPanel = new SettingsPanel(context.extensionUri, settingsManager);
  const helpPanel = new HelpPanel(context.extensionUri);
  const onboardingPanel = new OnboardingPanel(context.extensionUri, context, engineHost);
  const inspectorPanel = new EngineInspectorPanel(context.extensionUri, engineHost);
  const settingsSync = new SettingsSync(engineHost, settingsManager);

  void settingsManager.ensureDatabaseKey().then((key) => {
    if (key) {
      process.env.CODEE_DB_KEY = key;
    }
    void engineHost.initialize(projectPath);
  });

  context.subscriptions.push(
    vscode.window.registerTreeDataProvider("codee.sidebar", sidebarProvider),
    vscode.window.registerWebviewViewProvider("codee.chat", chatPanel, {
      webviewOptions: { retainContextWhenHidden: true }
    }),
    vscode.languages.registerCodeActionsProvider({ scheme: "file" }, new CodeActionProvider()),
    vscode.languages.registerHoverProvider({ scheme: "file" }, new HoverProvider()),
    vscode.workspace.onDidOpenTextDocument((document) => {
      if (document.uri.scheme !== "file") {
        return;
      }
      const projectPath = contextProvider.getProjectPath();
      if (!projectPath || !document.languageId) {
        return;
      }
      void engineHost.warmLanguageServer(projectPath, document.languageId);
    }),
    settingsSync,
    telemetry,
    engineHost.onEvent((event) => {
      if (event.type === "engine.error") {
        telemetry.track("engine_error");
      }
      if (event.type === "engine.status" && event.status?.status === "ready") {
        telemetry.track("engine_ready");
      }
    })
  );

  registerCommands(
    context,
    engineHost,
    chatController,
    contextProvider,
    statusBar,
    chatPanel,
    settingsPanel,
    helpPanel,
    onboardingPanel,
    inspectorPanel,
    telemetry
  );
  statusBar.initialize();
  void settingsSync.initialize();
  void telemetry.initialize();

  void onboardingPanel.shouldShow().then((show) => {
    if (show) {
      void onboardingPanel.show();
    }
  });
}

export function deactivate(): void {
  EngineHost.getInstance().dispose();
}
