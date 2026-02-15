import * as vscode from "vscode";
import { EngineHost } from "./EngineHost";
import { SettingsManager } from "../configuration/SettingsManager";
import type { CodeeConfig as CoreCodeeConfig } from "@codee/core-engine";

export class SettingsSync implements vscode.Disposable {
  private readonly disposables: vscode.Disposable[] = [];

  constructor(private readonly engineHost: EngineHost, private readonly settingsManager: SettingsManager) {}

  async initialize(): Promise<void> {
    await this.pushSettings();
    this.disposables.push(...this.settingsManager.watch(() => void this.pushSettings()));
    this.disposables.push(
      this.engineHost.onEvent((event) => {
        if (event.type === "engine.error" && event.error) {
          void this.handleEngineError(event.error.message, event.error.suggestion);
        }
      })
    );
  }

  dispose(): void {
    this.disposables.forEach((disposable) => disposable.dispose());
    this.disposables.length = 0;
  }

  private async pushSettings(): Promise<void> {
    try {
      const config = await this.settingsManager.resolve();
      await this.engineHost.applyRuntimeConfig(config as unknown as CoreCodeeConfig);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to apply settings.";
      vscode.window.showErrorMessage(message);
    }
  }

  private async handleEngineError(message: string, suggestion?: string): Promise<void> {
    const actions = ["Restart Engine", "Open Logs", "Open Documentation"];
    if (message.toLowerCase().includes("model") || suggestion?.includes("ollama pull")) {
      actions.unshift("Download Model");
    }
    if (message.toLowerCase().includes("project too large")) {
      actions.unshift("Open Indexing Settings");
    }

    const choice = await vscode.window.showErrorMessage(message, ...actions);
    if (choice === "Restart Engine") {
      await vscode.commands.executeCommand("codee.restartEngine");
    }
    if (choice === "Open Logs") {
      await vscode.commands.executeCommand("codee.openEngineLogs");
    }
    if (choice === "Open Documentation") {
      await vscode.commands.executeCommand("codee.openDocumentation");
    }
    if (choice === "Download Model") {
      await vscode.commands.executeCommand("codee.downloadModel");
    }
    if (choice === "Open Indexing Settings") {
      await vscode.commands.executeCommand("workbench.action.openSettings", "codee.advanced.excludePatterns");
    }
  }
}
