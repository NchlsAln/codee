"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationGit = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const GitRunner_1 = require("./GitRunner");
const TranslationBranch_1 = require("./TranslationBranch");
const TranslationCommit_1 = require("./TranslationCommit");
class TranslationGit {
    async createTranslationBranch(repoPath, sourceLang, targetLang) {
        const branch = new TranslationBranch_1.TranslationBranch(repoPath);
        return branch.createBranch(sourceLang, targetLang, new Date());
    }
    async stageTranslations(repoPath, translations) {
        for (const translation of translations) {
            await this.writeTranslation(translation);
        }
        const git = new GitRunner_1.GitRunner(repoPath);
        await git.exec(["add", "--", "."]);
    }
    async createCommit(repoPath, stats) {
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
        const commit = new TranslationCommit_1.TranslationCommit(repoPath);
        await commit.createCommit(summary);
        const git = new GitRunner_1.GitRunner(repoPath);
        const hash = await git.exec(["rev-parse", "HEAD"]);
        return hash.trim();
    }
    async generateDiff(repoPath, _translations) {
        const git = new GitRunner_1.GitRunner(repoPath);
        const summary = await git.exec(["diff", "--cached", "--stat"]);
        const full = await git.exec(["diff", "--cached"]);
        return [summary.trim(), full.trim()].filter(Boolean).join("\n\n");
    }
    async writeTranslation(translation) {
        const targetPath = translation.targetPath;
        await promises_1.default.mkdir(node_path_1.default.dirname(targetPath), { recursive: true });
        await promises_1.default.writeFile(targetPath, translation.content, "utf-8");
    }
}
exports.TranslationGit = TranslationGit;
