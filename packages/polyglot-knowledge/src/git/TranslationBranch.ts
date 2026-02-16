import { GitRunner } from "./GitRunner";
import { LanguageId } from "../types";

export class TranslationBranch {
  private readonly git: GitRunner;

  constructor(private readonly projectRoot: string) {
    this.git = new GitRunner(projectRoot);
  }

  async createBranch(from: LanguageId, to: LanguageId, date: Date = new Date()): Promise<string> {
    const stamp = date.toISOString().slice(0, 10);
    const branchName = `translate/${from}-to-${to}-${stamp}`;
    await this.git.exec(["checkout", "-b", branchName]);
    return branchName;
  }

  async checkout(branchName: string): Promise<void> {
    await this.git.exec(["checkout", branchName]);
  }

  async deleteBranch(branchName: string): Promise<void> {
    await this.git.exec(["branch", "-D", branchName]);
  }
}
