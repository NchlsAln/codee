import * as vscode from "vscode";
import { EngineHost } from "../bridge/EngineHost";
import { ChatController } from "../bridge/ChatController";

export class SidebarProvider implements vscode.TreeDataProvider<SidebarItem> {
  private readonly _onDidChangeTreeData = new vscode.EventEmitter<SidebarItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  constructor(private readonly engine: EngineHost, private readonly chatController: ChatController) {
    this.engine.onEvent(() => this.refresh());
  }

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: SidebarItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: SidebarItem): Thenable<SidebarItem[]> {
    if (!element) {
      return Promise.resolve([
        new SidebarItem("Active Projects", vscode.TreeItemCollapsibleState.Expanded, "projects"),
        new SidebarItem("Recent Conversations", vscode.TreeItemCollapsibleState.Collapsed, "conversations"),
        new SidebarItem("Language Servers Status", vscode.TreeItemCollapsibleState.Collapsed, "languages"),
        new SidebarItem("Model Management", vscode.TreeItemCollapsibleState.Collapsed, "models")
      ]);
    }

    switch (element.contextValue) {
      case "projects":
        return Promise.resolve(this.buildProjectItems());
      case "conversations":
        return Promise.resolve(this.buildConversationItems());
      case "languages":
        return Promise.resolve(this.buildLanguageItems());
      case "models":
        return Promise.resolve(this.buildModelItems());
      default:
        return Promise.resolve([]);
    }
  }

  private buildProjectItems(): SidebarItem[] {
    const workspace = vscode.workspace.workspaceFolders?.[0];
    if (!workspace) {
      return [new SidebarItem("No active workspace", vscode.TreeItemCollapsibleState.None)];
    }
    return [new SidebarItem(workspace.name, vscode.TreeItemCollapsibleState.None)];
  }

  private buildConversationItems(): SidebarItem[] {
    const summaries = this.chatController.getConversationSummaries();
    if (summaries.length === 0) {
      return [new SidebarItem("No conversations yet", vscode.TreeItemCollapsibleState.None)];
    }
    return summaries.map((summary) =>
      new SidebarItem(
        `${summary.sessionId} (${summary.messageCount} messages)`,
        vscode.TreeItemCollapsibleState.None
      )
    );
  }

  private buildLanguageItems(): SidebarItem[] {
    const enabled = vscode.workspace.getConfiguration("codee").get<string[]>("languages.enabled") ?? [];
    if (enabled.length === 0) {
      return [new SidebarItem("No languages enabled", vscode.TreeItemCollapsibleState.None)];
    }
    return enabled.map((language: string) =>
      new SidebarItem(`${language}: active`, vscode.TreeItemCollapsibleState.None)
    );
  }

  private buildModelItems(): SidebarItem[] {
    const status = this.engine.getLastStatus();
    const model = status?.status?.model ?? "unknown";
    return [new SidebarItem(`Active: ${model}`, vscode.TreeItemCollapsibleState.None)];
  }
}

class SidebarItem extends vscode.TreeItem {
  declare contextValue?: string;

  constructor(
    label: string,
    collapsibleState: vscode.TreeItemCollapsibleState,
    contextValue?: string
  ) {
    super(label, collapsibleState);
    this.contextValue = contextValue;
  }
}
