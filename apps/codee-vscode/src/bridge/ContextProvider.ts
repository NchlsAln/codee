import * as vscode from "vscode";
import { TextDecoder } from "util";
import { AttachmentRef } from "./MessageProtocol";

export class ContextProvider {
  private readonly attachments = new Map<string, AttachmentRef>();

  getProjectPath(): string | undefined {
    return vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  }

  getActiveFilePath(): string | undefined {
    return vscode.window.activeTextEditor?.document.uri.fsPath;
  }

  getActiveLanguageId(): string | undefined {
    return vscode.window.activeTextEditor?.document.languageId;
  }

  getSelectionText(): string | undefined {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.selection.isEmpty) {
      return undefined;
    }
    return editor.document.getText(editor.selection);
  }

  async addFileToContext(filePath: string): Promise<void> {
    const label = vscode.workspace.asRelativePath(filePath, false);
    this.attachments.set(filePath, { path: filePath, label });
  }

  removeFileFromContext(filePath: string): void {
    this.attachments.delete(filePath);
  }

  clearAttachments(): void {
    this.attachments.clear();
  }

  listAttachments(): AttachmentRef[] {
    return Array.from(this.attachments.values());
  }

  async resolveMentions(text: string): Promise<AttachmentRef[]> {
    const matches = Array.from(text.matchAll(/@([\w./-]+)/g));
    if (matches.length === 0) {
      return [];
    }

    const resolved: AttachmentRef[] = [];
    for (const match of matches) {
      const token = match[1];
      if (!token) {
        continue;
      }
      const uriMatches = await vscode.workspace.findFiles(`**/${token}`, "**/node_modules/**", 3);
      for (const uri of uriMatches) {
        resolved.push({ path: uri.fsPath, label: vscode.workspace.asRelativePath(uri, false) });
      }
    }

    return resolved;
  }

  async readAttachmentContents(attachments: AttachmentRef[]): Promise<string[]> {
    const decoder = new TextDecoder();
    const contents: string[] = [];
    for (const attachment of attachments) {
      try {
        const data = await vscode.workspace.fs.readFile(vscode.Uri.file(attachment.path));
        const raw = decoder.decode(data);
        data.fill(0);
        const sanitized = sanitizeContextContent(raw);
        contents.push(`File: ${attachment.label}\n${sanitized}`);
      } catch {
        contents.push(`File: ${attachment.label}\n<Unable to read file>`);
      }
    }
    return contents;
  }
}

function sanitizeContextContent(content: string): string {
  // eslint-disable-next-line no-control-regex
  return content.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").replace(/```/g, "``\\`");
}
