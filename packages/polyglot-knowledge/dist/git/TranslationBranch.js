"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationBranch = void 0;
const GitRunner_1 = require("./GitRunner");
class TranslationBranch {
    projectRoot;
    git;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
        this.git = new GitRunner_1.GitRunner(projectRoot);
    }
    async createBranch(from, to, date = new Date()) {
        const stamp = date.toISOString().slice(0, 10);
        const branchName = `translate/${from}-to-${to}-${stamp}`;
        await this.git.exec(["checkout", "-b", branchName]);
        return branchName;
    }
    async checkout(branchName) {
        await this.git.exec(["checkout", branchName]);
    }
    async deleteBranch(branchName) {
        await this.git.exec(["branch", "-D", branchName]);
    }
}
exports.TranslationBranch = TranslationBranch;
