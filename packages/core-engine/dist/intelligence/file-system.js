"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeFileSystem = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
class NodeFileSystem {
    async readFile(filePath) {
        return promises_1.default.readFile(filePath, "utf-8");
    }
    async writeFile(filePath, contents) {
        await promises_1.default.mkdir(node_path_1.default.dirname(filePath), { recursive: true });
        await promises_1.default.writeFile(filePath, contents, "utf-8");
    }
    async listFiles(root, extensions) {
        const results = [];
        const normalized = extensions?.map((ext) => ext.toLowerCase());
        const walk = async (dir) => {
            const entries = await promises_1.default.readdir(dir, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = node_path_1.default.join(dir, entry.name);
                if (entry.isDirectory()) {
                    if (entry.name === "node_modules" || entry.name === ".git") {
                        continue;
                    }
                    await walk(fullPath);
                    continue;
                }
                if (!normalized || normalized.length === 0) {
                    results.push(fullPath);
                    continue;
                }
                const ext = node_path_1.default.extname(entry.name).toLowerCase();
                if (normalized.includes(ext)) {
                    results.push(fullPath);
                }
            }
        };
        await walk(root);
        return results;
    }
    async exists(filePath) {
        try {
            await promises_1.default.access(filePath);
            return true;
        }
        catch {
            return false;
        }
    }
}
exports.NodeFileSystem = NodeFileSystem;
