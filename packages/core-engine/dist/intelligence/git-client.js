"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeGitClient = void 0;
const node_child_process_1 = require("node:child_process");
const promises_1 = __importDefault(require("node:fs/promises"));
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
const node_util_1 = require("node:util");
const execFileAsync = (0, node_util_1.promisify)(node_child_process_1.execFile);
class NodeGitClient {
    projectRoot;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
    }
    async isGitRepo() {
        const output = await this.execGit(["rev-parse", "--is-inside-work-tree"]);
        return output.trim() === "true";
    }
    async diffPaths(paths) {
        if (paths.length === 0) {
            return "";
        }
        const args = ["diff", "--", ...paths];
        return this.execGit(args);
    }
    async diffText(before, after, filePath) {
        const tempDir = await promises_1.default.mkdtemp(node_path_1.default.join(node_os_1.default.tmpdir(), "codee-diff-"));
        const safeName = node_path_1.default.basename(filePath);
        const beforePath = node_path_1.default.join(tempDir, `before-${safeName}`);
        const afterPath = node_path_1.default.join(tempDir, `after-${safeName}`);
        try {
            await promises_1.default.writeFile(beforePath, before, "utf-8");
            await promises_1.default.writeFile(afterPath, after, "utf-8");
            const diff = await this.execGit([
                "diff",
                "--no-index",
                "--",
                beforePath,
                afterPath
            ]);
            return diff;
        }
        finally {
            await promises_1.default.rm(tempDir, { recursive: true, force: true });
        }
    }
    async checkout(paths) {
        if (paths.length === 0) {
            return;
        }
        await this.execGit(["checkout", "--", ...paths]);
    }
    async execGit(args) {
        try {
            const { stdout } = await execFileAsync("git", args, {
                cwd: this.projectRoot
            });
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
exports.NodeGitClient = NodeGitClient;
