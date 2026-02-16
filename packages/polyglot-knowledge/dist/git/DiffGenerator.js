"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffGenerator = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
const GitRunner_1 = require("./GitRunner");
class DiffGenerator {
    projectRoot;
    git;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
        this.git = new GitRunner_1.GitRunner(projectRoot);
    }
    async diffText(before, after, filePath) {
        const tempDir = await promises_1.default.mkdtemp(node_path_1.default.join(node_os_1.default.tmpdir(), "codee-diff-"));
        const safeName = node_path_1.default.basename(filePath);
        const beforePath = node_path_1.default.join(tempDir, `before-${safeName}`);
        const afterPath = node_path_1.default.join(tempDir, `after-${safeName}`);
        try {
            await promises_1.default.writeFile(beforePath, before, "utf-8");
            await promises_1.default.writeFile(afterPath, after, "utf-8");
            return await this.git.exec(["diff", "--no-index", "--", beforePath, afterPath]);
        }
        finally {
            await promises_1.default.rm(tempDir, { recursive: true, force: true });
        }
    }
}
exports.DiffGenerator = DiffGenerator;
