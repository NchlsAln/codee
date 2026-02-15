import * as vscode from "vscode";
import { ContextFile } from "./MessageProtocol";

const SYMBOL_LIMIT = 80;

export class SymbolMentionProvider {
  async listSymbols(): Promise<ContextFile[]> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return [];
    }

    const symbols = await vscode.commands.executeCommand<vscode.DocumentSymbol[]>(
      "vscode.executeDocumentSymbolProvider",
      editor.document.uri
    );

    if (!symbols) {
      return [];
    }

    const flattened = flattenSymbols(symbols).slice(0, SYMBOL_LIMIT);
    return flattened.map((symbol) => ({
      path: editor.document.uri.fsPath,
      label: symbol.name,
      kind: "symbol",
      detail: symbol.detail || symbol.kind.toString(),
      icon: iconForSymbol(symbol.kind)
    }));
  }
}

function flattenSymbols(symbols: vscode.DocumentSymbol[]): vscode.DocumentSymbol[] {
  const result: vscode.DocumentSymbol[] = [];
  for (const symbol of symbols) {
    if (isAllowedSymbol(symbol.kind)) {
      result.push(symbol);
    }
    if (symbol.children.length > 0) {
      result.push(...flattenSymbols(symbol.children));
    }
  }
  return result;
}

function isAllowedSymbol(kind: vscode.SymbolKind): boolean {
  return [
    vscode.SymbolKind.Function,
    vscode.SymbolKind.Method,
    vscode.SymbolKind.Class,
    vscode.SymbolKind.Variable,
    vscode.SymbolKind.Interface
  ].includes(kind);
}

function iconForSymbol(kind: vscode.SymbolKind): string {
  if (kind === vscode.SymbolKind.Class) {
    return "symbol-class";
  }
  if (kind === vscode.SymbolKind.Function || kind === vscode.SymbolKind.Method) {
    return "symbol-method";
  }
  if (kind === vscode.SymbolKind.Interface) {
    return "symbol-interface";
  }
  return "symbol-variable";
}
