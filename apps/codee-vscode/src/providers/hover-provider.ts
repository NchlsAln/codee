import * as vscode from "vscode";

export class HoverProvider implements vscode.HoverProvider {
  provideHover(): vscode.Hover | undefined {
    return undefined;
  }
}
