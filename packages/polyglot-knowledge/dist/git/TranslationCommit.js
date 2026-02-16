"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationCommit = void 0;
const GitRunner_1 = require("./GitRunner");
class TranslationCommit {
    projectRoot;
    git;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
        this.git = new GitRunner_1.GitRunner(projectRoot);
    }
    async createCommit(summary) {
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
exports.TranslationCommit = TranslationCommit;
