"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitRunner = void 0;
const node_child_process_1 = require("node:child_process");
const node_util_1 = require("node:util");
const execFileAsync = (0, node_util_1.promisify)(node_child_process_1.execFile);
class GitRunner {
    projectRoot;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
    }
    async isGitRepo() {
        const result = await this.exec(["rev-parse", "--is-inside-work-tree"]);
        return result.trim() === "true";
    }
    async isClean() {
        const result = await this.exec(["status", "--porcelain"]);
        return result.trim().length === 0;
    }
    async exec(args) {
        try {
            const { stdout } = await execFileAsync("git", args, { cwd: this.projectRoot });
            return stdout.toString();
        }
        catch (error) {
            if (error && typeof error === "object" && "stdout" in error) {
                return String(error.stdout ?? "");
            }
            return "";
        }
    }
}
exports.GitRunner = GitRunner;
