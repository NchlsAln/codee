import { GitRunner } from "./GitRunner";

export interface TranslationCommitSummary {
  title: string;
  bodyLines: string[];
  files: string[];
}

export class TranslationCommit {
  private readonly git: GitRunner;

  constructor(private readonly projectRoot: string) {
    this.git = new GitRunner(projectRoot);
  }

  async createCommit(summary: TranslationCommitSummary): Promise<void> {
    if (summary.files.length > 0) {
      await this.git.exec(["add", "--", ...summary.files]);
    }
    const message = [summary.title, "", ...summary.bodyLines].join("\n");
    await this.git.exec([
      "commit",
      "--author",
      "Codee Translator <translate@codee.ai>",
      "-m",
      message
    ]);
  }
}
