import * as vscode from "vscode";
import { EngineHost } from "../bridge/EngineHost";
import { EngineStatusEvent } from "../bridge/MessageProtocol";

export class StatusBarService {
  private modelItem: vscode.StatusBarItem;
  private statusItem: vscode.StatusBarItem;
  private languageItem: vscode.StatusBarItem;

  constructor(private readonly context: vscode.ExtensionContext, private readonly engine: EngineHost) {
    this.modelItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    this.statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99);
    this.languageItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 98);

    this.context.subscriptions.push(this.modelItem, this.statusItem, this.languageItem);
  }

  initialize(): void {
    const status = this.engine.getLastStatus();
    this.modelItem.text = `$(sparkle) ${status?.status?.model ?? "unknown"}`;
    this.statusItem.text = `$(radio-tower) ${status?.status?.status ?? "initializing"}`;
    this.languageItem.text = `$(code) ${this.getActiveLanguage()}`;

    this.modelItem.show();
    this.statusItem.show();
    this.languageItem.show();

    this.engine.onEvent((event) => {
      if (event.type === "engine.status" && event.status) {
        this.updateStatus(event.status);
      }
    });

    vscode.window.onDidChangeActiveTextEditor(() => {
      this.languageItem.text = `$(code) ${this.getActiveLanguage()}`;
    });
  }

  setLanguage(languageId: string): void {
    this.languageItem.text = `$(code) ${languageId}`;
  }

  private updateStatus(status: EngineStatusEvent): void {
    this.statusItem.text = `$(radio-tower) ${status.status}`;
    if (status.model) {
      this.modelItem.text = `$(sparkle) ${status.model}`;
    }
  }

  private getActiveLanguage(): string {
    return vscode.window.activeTextEditor?.document.languageId ?? "none";
  }
}
