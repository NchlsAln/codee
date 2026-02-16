import fs from "node:fs/promises";
import path from "node:path";
import { GitRunner } from "./GitRunner";
import { TranslationBranch } from "./TranslationBranch";
import { TranslationCommit } from "./TranslationCommit";
import { TranslatedFile, TranslationStats } from "../types";

export class TranslationGit {
  async createTranslationBranch(
    repoPath: string,
    sourceLang: TranslationStats["sourceLanguage"],
    targetLang: TranslationStats["targetLanguage"]
  ): Promise<string> {
    const branch = new TranslationBranch(repoPath);
    return branch.createBranch(sourceLang, targetLang, new Date());
  }

  async stageTranslations(repoPath: string, translations: TranslatedFile[]): Promise<void> {
    for (const translation of translations) {
      await this.writeTranslation(translation);
    }
    const git = new GitRunner(repoPath);
    await git.exec(["add", "--", "."]);
  }

  async createCommit(repoPath: string, stats: TranslationStats): Promise<string> {
    const summary = {
      title: `feat: Translate ${stats.sourceLanguage} to ${stats.targetLanguage}`,
      bodyLines: [
        `- ${stats.successful} files translated`,
        `- ${stats.warnings} files need review`,
        `- ${stats.failed} files failed`,
        "",
        `Run ${stats.targetLanguage} tests to verify.`
      ],
      files: []
    };
    const commit = new TranslationCommit(repoPath);
    await commit.createCommit(summary);
    const git = new GitRunner(repoPath);
    const hash = await git.exec(["rev-parse", "HEAD"]);
    return hash.trim();
  }

  async generateDiff(repoPath: string, _translations: TranslatedFile[]): Promise<string> {
    const git = new GitRunner(repoPath);
    const summary = await git.exec(["diff", "--cached", "--stat"]);
    const full = await git.exec(["diff", "--cached"]);
    return [summary.trim(), full.trim()].filter(Boolean).join("\n\n");
  }

  private async writeTranslation(translation: TranslatedFile): Promise<void> {
    const targetPath = translation.targetPath;
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, translation.content, "utf-8");
  }
}
