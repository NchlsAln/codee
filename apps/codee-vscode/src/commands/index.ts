import * as vscode from "vscode";
import { EngineHost } from "../bridge/EngineHost";
import { StatusBarService } from "../services/status-bar";
import { ChatPanel } from "../panels/chat-panel";
import { openSettingsCommand } from "./open-settings";
import { SettingsPanel } from "../panels/settings-panel";
import { HelpPanel } from "../panels/help-panel";
import { OnboardingPanel } from "../panels/onboarding-panel";
import { EngineInspectorPanel } from "../panels/engine-inspector-panel";
import { ChatController } from "../bridge/ChatController";
import { ContextProvider } from "../bridge/ContextProvider";
import { TelemetryService } from "../telemetry/TelemetryService";
import { LearningModeService } from "../coding-assistant/learning-mode-service";
import {
  explainSelected,
  generateUnitTests,
  refactorSelection,
  clearLocalData,
  openDocumentation,
  openFeedback,
  openEngineLogs,
  restartEngine,
  downloadModel,
  exportDebugLog,
  convertToLanguage,
  explainPattern,
  openLearningMode,
  openPatternExplorer,
  compareLanguages,
  findPattern,
  translateProject
} from "../bridge/CommandImplementations";

export function registerCommands(
  context: vscode.ExtensionContext,
  engineHost: EngineHost,
  chatController: ChatController,
  contextProvider: ContextProvider,
  statusBar: StatusBarService,
  chatPanel: ChatPanel,
  settingsPanel: SettingsPanel,
  helpPanel: HelpPanel,
  onboardingPanel: OnboardingPanel,
  inspectorPanel: EngineInspectorPanel,
  telemetry?: TelemetryService,
  learningMode?: LearningModeService
): void {
  const withTelemetry = <T, A extends unknown[]>(
    commandId: string,
    handler: (...args: A) => T
  ): ((...args: A) => T) => {
    return (...args: A) => {
      telemetry?.trackCommand(commandId);
      return handler(...args);
    };
  };

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "codee.startSession",
      withTelemetry("codee.startSession", async () => {
      const sessionId = await engineHost.startSession(contextProvider.getProjectPath());
      chatController.setSession(sessionId);
      chatPanel.showSystemMessage(`New session started: ${sessionId}`);
      })
    ),
    vscode.commands.registerCommand(
      "codee.explainSelected",
      withTelemetry("codee.explainSelected", () => explainSelected(chatController, contextProvider))
    ),
    vscode.commands.registerCommand(
      "codee.generateTests",
      withTelemetry("codee.generateTests", () => generateUnitTests(chatController, contextProvider))
    ),
    vscode.commands.registerCommand(
      "codee.refactorSelection",
      withTelemetry("codee.refactorSelection", () => refactorSelection(engineHost, contextProvider))
    ),
    vscode.commands.registerCommand(
      "codee.switchLanguageMode",
      withTelemetry("codee.switchLanguageMode", () => {
        const languageId = contextProvider.getActiveLanguageId() ?? "unknown";
        statusBar.setLanguage(languageId);
      })
    ),
    vscode.commands.registerCommand(
      "codee.openSettings",
      withTelemetry("codee.openSettings", () => openSettingsCommand(settingsPanel))
    ),
    vscode.commands.registerCommand(
      "codee.clearLocalData",
      withTelemetry("codee.clearLocalData", () => clearLocalData(engineHost))
    ),
    vscode.commands.registerCommand(
      "codee.openDocumentation",
      withTelemetry("codee.openDocumentation", () => openDocumentation())
    ),
    vscode.commands.registerCommand(
      "codee.openFeedback",
      withTelemetry("codee.openFeedback", () => openFeedback())
    ),
    vscode.commands.registerCommand(
      "codee.openHelp",
      withTelemetry("codee.openHelp", () => helpPanel.show())
    ),
    vscode.commands.registerCommand(
      "codee.openOnboarding",
      withTelemetry("codee.openOnboarding", () => onboardingPanel.show())
    ),
    vscode.commands.registerCommand(
      "codee.openEngineInspector",
      withTelemetry("codee.openEngineInspector", () => {
        const enabled = vscode.workspace.getConfiguration("codee").get<boolean>("advanced.developerMode");
        if (!enabled) {
          void vscode.window.showWarningMessage("Enable Developer Mode to use the engine inspector.");
          return;
        }
        inspectorPanel.show();
      })
    ),
    vscode.commands.registerCommand(
      "codee.openEngineLogs",
      withTelemetry("codee.openEngineLogs", () => openEngineLogs(engineHost))
    ),
    vscode.commands.registerCommand(
      "codee.restartEngine",
      withTelemetry("codee.restartEngine", () => restartEngine(engineHost, contextProvider))
    ),
    vscode.commands.registerCommand(
      "codee.downloadModel",
      withTelemetry("codee.downloadModel", () => downloadModel())
    ),
    vscode.commands.registerCommand(
      "codee.exportDebugLog",
      withTelemetry("codee.exportDebugLog", () =>
        exportDebugLog(engineHost, chatController, contextProvider)
      )
    ),
    vscode.commands.registerCommand(
      "codee.convertLanguage",
      withTelemetry(
        "codee.convertLanguage",
        (target: "python" | "typescript" | "rust" | "go" | "java" | "cpp") =>
        convertToLanguage(engineHost, contextProvider, target)
      )
    ),
    vscode.commands.registerCommand(
      "codee.explainPattern",
      withTelemetry("codee.explainPattern", () => explainPattern())
    ),
    vscode.commands.registerCommand(
      "codee.learningMode",
      withTelemetry("codee.learningMode", () => openLearningMode(learningMode))
    ),
    vscode.commands.registerCommand(
      "codee.openPatternExplorer",
      withTelemetry("codee.openPatternExplorer", () => openPatternExplorer(chatPanel))
    ),
    vscode.commands.registerCommand(
      "codee.compareLanguages",
      withTelemetry("codee.compareLanguages", () => compareLanguages(chatPanel))
    ),
    vscode.commands.registerCommand(
      "codee.findPattern",
      withTelemetry("codee.findPattern", () => findPattern(engineHost, chatPanel))
    ),
    vscode.commands.registerCommand(
      "codee.translateProject",
      withTelemetry("codee.translateProject", () =>
        translateProject(engineHost, contextProvider, context.extensionUri)
      )
    )
  );
}
