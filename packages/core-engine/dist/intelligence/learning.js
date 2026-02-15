"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrectionStore = void 0;
const node_path_1 = __importDefault(require("node:path"));
const file_system_1 = require("./file-system");
class CorrectionStore {
    projectRoot;
    fileSystem;
    filePath;
    constructor(projectRoot, fileSystem = new file_system_1.NodeFileSystem()) {
        this.projectRoot = projectRoot;
        this.fileSystem = fileSystem;
        this.filePath = node_path_1.default.join(projectRoot, ".codee", "corrections.json");
    }
    async list() {
        if (!(await this.fileSystem.exists(this.filePath))) {
            return [];
        }
        const raw = await this.fileSystem.readFile(this.filePath);
        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        }
        catch {
            return [];
        }
    }
    async record(entry) {
        const entries = await this.list();
        entries.unshift(entry);
        const trimmed = entries.slice(0, 200);
        await this.fileSystem.writeFile(this.filePath, JSON.stringify(trimmed, null, 2));
    }
}
exports.CorrectionStore = CorrectionStore;
