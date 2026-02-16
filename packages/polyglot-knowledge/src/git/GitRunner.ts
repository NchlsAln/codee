import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export class GitRunner {
  constructor(private readonly projectRoot: string) {}

  async isGitRepo(): Promise<boolean> {
    const result = await this.exec(["rev-parse", "--is-inside-work-tree"]);
    return result.trim() === "true";
  }

  async isClean(): Promise<boolean> {
    const result = await this.exec(["status", "--porcelain"]);
    return result.trim().length === 0;
  }

  async exec(args: string[]): Promise<string> {
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
