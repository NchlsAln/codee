import { execFile } from "node:child_process";
import { promisify } from "node:util";
import * as vscode from "vscode";

const execFileAsync = promisify(execFile);

export class GitIntegration {
  constructor(private readonly projectRoot: string) {}

  async isGitRepo(): Promise<boolean> {
    const result = await this.exec(["rev-parse", "--is-inside-work-tree"]);
    return result.trim() === "true";
  }

  async isClean(): Promise<boolean> {
    const result = await this.exec(["status", "--porcelain"]);
    return result.trim().length === 0;
  }

  async currentBranch(): Promise<string> {
    const result = await this.exec(["rev-parse", "--abbrev-ref", "HEAD"]);
    return result.trim() || "main";
  }

  async createBranch(name: string): Promise<void> {
    await this.exec(["checkout", "-b", name]);
  }

  async checkoutBranch(name: string): Promise<void> {
    await this.exec(["checkout", name]);
  }

  async deleteBranch(name: string): Promise<void> {
    await this.exec(["branch", "-D", name]);
  }

  async stageFiles(files: string[]): Promise<void> {
    if (files.length === 0) {
      return;
    }
    await this.exec(["add", "--", ...files]);
  }

  async commit(message: string): Promise<void> {
    await this.exec([
      "commit",
      "--author",
      "Codee Translator <translate@codee.ai>",
      "-m",
      message
    ]);
  }

  async openPullRequest(branchName: string): Promise<void> {
    const remoteUrl = await this.exec(["config", "--get", "remote.origin.url"]);
    if (!remoteUrl) {
      return;
    }
    const github = remoteUrl.trim().replace(/\.git$/, "");
    if (!github.includes("github.com")) {
      return;
    }
    const url = github.startsWith("http") ? github : `https://github.com/${github.split(":")[1]}`;
    const prUrl = `${url}/compare/${branchName}?expand=1`;
    await vscode.env.openExternal(vscode.Uri.parse(prUrl));
  }

  private async exec(args: string[]): Promise<string> {
    try {
      const { stdout } = await execFileAsync("git", args, { cwd: this.projectRoot });
      return stdout.toString();
    } catch (error) {
      if (error && typeof error === "object" && "stdout" in error) {
        return String((error as { stdout: string }).stdout ?? "");
      }
      return "";
    }
  }
}
