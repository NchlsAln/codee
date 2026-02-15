import * as vscode from "vscode";
import path from "path";
import { ContextFile } from "./MessageProtocol";

const DEFAULT_LIMIT = 200;

export class FileMentionProvider {
  async listFiles(limit = DEFAULT_LIMIT): Promise<ContextFile[]> {
    const config = vscode.workspace.getConfiguration("codee");
    const includePatterns = config.get<string[]>("advanced.includePatterns") ?? ["**/*"];
    const excludePatterns = config.get<string[]>("advanced.excludePatterns") ?? ["**/node_modules/**", "**/.git/**"];

    const files: ContextFile[] = [];
    for (const pattern of includePatterns) {
      const matches = await vscode.workspace.findFiles(pattern, `{${excludePatterns.join(",")}}`, limit);
      for (const uri of matches) {
        files.push(this.toContextFile(uri));
        if (files.length >= limit) {
          return files;
        }
      }
    }

    return files;
  }

  search(query: string, files: ContextFile[], limit = 30): ContextFile[] {
    const normalized = query.toLowerCase();
    const scored = files
      .map((file) => ({ file, score: fuzzyScore(normalized, file.label.toLowerCase()) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((entry) => entry.file);
    return scored;
  }

  private toContextFile(uri: vscode.Uri): ContextFile {
    const label = vscode.workspace.asRelativePath(uri, false);
    const ext = path.extname(uri.fsPath).toLowerCase();
    return {
      path: uri.fsPath,
      label,
      kind: "file",
      icon: this.mapIcon(ext)
    };
  }

  private mapIcon(ext: string): string {
    if ([".ts", ".tsx", ".js", ".jsx", ".py", ".java", ".go", ".rs"].includes(ext)) {
      return "file-code";
    }
    if ([".json", ".yml", ".yaml", ".toml"].includes(ext)) {
      return "file-symlink-file";
    }
    if ([".md", ".txt"].includes(ext)) {
      return "book";
    }
    return "file";
  }
}

function fuzzyScore(query: string, target: string): number {
  if (!query) {
    return 0;
  }
  let score = 0;
  let targetIndex = 0;
  for (const char of query) {
    const found = target.indexOf(char, targetIndex);
    if (found === -1) {
      return 0;
    }
    score += 1 + Math.max(0, 5 - (found - targetIndex));
    targetIndex = found + 1;
  }
  return score;
}
