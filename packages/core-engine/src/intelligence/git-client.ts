import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export interface GitClient {
  isGitRepo(): Promise<boolean>;
  diffPaths(paths: string[]): Promise<string>;
  diffText(before: string, after: string, filePath: string): Promise<string>;
  checkout(paths: string[]): Promise<void>;
}

export class NodeGitClient implements GitClient {
  constructor(private readonly projectRoot: string) {}

  async isGitRepo(): Promise<boolean> {
    const output = await this.execGit(["rev-parse", "--is-inside-work-tree"]);
    return output.trim() === "true";
  }

  async diffPaths(paths: string[]): Promise<string> {
    if (paths.length === 0) {
      return "";
    }
    const args = ["diff", "--", ...paths];
    return this.execGit(args);
  }

  async diffText(before: string, after: string, filePath: string): Promise<string> {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "codee-diff-"));
    const safeName = path.basename(filePath);
    const beforePath = path.join(tempDir, `before-${safeName}`);
    const afterPath = path.join(tempDir, `after-${safeName}`);

    try {
      await fs.writeFile(beforePath, before, "utf-8");
      await fs.writeFile(afterPath, after, "utf-8");
      const diff = await this.execGit([
        "diff",
        "--no-index",
        "--",
        beforePath,
        afterPath
      ]);
      return diff;
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }

  async checkout(paths: string[]): Promise<void> {
    if (paths.length === 0) {
      return;
    }
    await this.execGit(["checkout", "--", ...paths]);
  }

  private async execGit(args: string[]): Promise<string> {
    try {
      const { stdout } = await execFileAsync("git", args, {
        cwd: this.projectRoot
      });
      return stdout.toString();
    } catch (error) {
      if (error && typeof error === "object" && "stdout" in error) {
        return String((error as { stdout: string }).stdout ?? "");
      }
      return "";
    }
  }
}
