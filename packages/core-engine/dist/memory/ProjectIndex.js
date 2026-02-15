"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectIndex = void 0;
const events_1 = require("events");
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const chokidar_1 = __importDefault(require("chokidar"));
class ProjectIndex extends events_1.EventEmitter {
    files = new Map();
    dependencies = [];
    dependenciesByFile = new Map();
    watcher = null;
    constructor() {
        super();
    }
    async scan(projectPath, options) {
        const entries = await this.walk(projectPath, options?.signal);
        let processed = 0;
        const total = entries.length;
        for (const entry of entries) {
            if (options?.signal?.aborted) {
                break;
            }
            const metadata = await this.buildMetadata(entry);
            this.files.set(entry, metadata);
            processed += 1;
            this.emit("index.progress", { current: processed, total });
        }
        await this.rebuildDependencies();
    }
    async ensureFile(filePath) {
        const metadata = await this.buildMetadata(filePath);
        this.files.set(filePath, metadata);
        await this.updateDependenciesForFile(filePath);
    }
    getSnapshot(projectPath) {
        return {
            root: projectPath,
            files: Array.from(this.files.values()),
            dependencies: [...this.dependencies]
        };
    }
    getFileMetadata(filePath) {
        return this.files.get(filePath);
    }
    listFiles() {
        return Array.from(this.files.values());
    }
    async getFileContent(filePath) {
        try {
            return await (0, promises_1.readFile)(filePath, "utf-8");
        }
        catch (error) {
            return "";
        }
    }
    watch(projectPath) {
        if (this.watcher) {
            return;
        }
        this.watcher = chokidar_1.default.watch(projectPath, {
            ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"]
        });
        this.watcher.on("add", (filePath) => void this.onFileChanged(filePath));
        this.watcher.on("change", (filePath) => void this.onFileChanged(filePath));
        this.watcher.on("unlink", (filePath) => this.onFileRemoved(filePath));
    }
    async stopWatching() {
        if (this.watcher) {
            await this.watcher.close();
            this.watcher = null;
        }
    }
    async onFileChanged(filePath) {
        const metadata = await this.buildMetadata(filePath);
        this.files.set(filePath, metadata);
        await this.updateDependenciesForFile(filePath);
        this.emit("file.changed", { filePath, metadata });
    }
    onFileRemoved(filePath) {
        this.files.delete(filePath);
        this.dependenciesByFile.delete(filePath);
        this.refreshDependencies();
        this.emit("file.removed", { filePath });
    }
    async walk(root, signal) {
        if (signal?.aborted) {
            return [];
        }
        const entries = await (0, promises_1.readdir)(root, { withFileTypes: true });
        const files = [];
        for (const entry of entries) {
            if (signal?.aborted) {
                break;
            }
            const fullPath = path_1.default.join(root, entry.name);
            if (entry.isDirectory()) {
                if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "dist") {
                    continue;
                }
                files.push(...(await this.walk(fullPath, signal)));
            }
            else {
                files.push(fullPath);
            }
        }
        return files;
    }
    async buildMetadata(filePath) {
        const stats = await (0, promises_1.stat)(filePath);
        const languageId = this.detectLanguage(filePath);
        return {
            path: filePath,
            languageId,
            size: stats.size,
            lastModified: stats.mtimeMs
        };
    }
    detectLanguage(filePath) {
        const ext = path_1.default.extname(filePath).toLowerCase();
        const map = {
            ".ts": "typescript",
            ".tsx": "typescript",
            ".js": "javascript",
            ".jsx": "javascript",
            ".py": "python",
            ".java": "java",
            ".cpp": "cpp",
            ".cc": "cpp",
            ".c": "c",
            ".cs": "csharp",
            ".go": "go",
            ".rs": "rust",
            ".rb": "ruby",
            ".php": "php"
        };
        return map[ext] ?? "unknown";
    }
    async rebuildDependencies() {
        this.dependenciesByFile.clear();
        const files = Array.from(this.files.keys());
        await Promise.all(files.map(async (filePath) => {
            const content = await this.getFileContent(filePath);
            this.dependenciesByFile.set(filePath, this.extractDependencies(filePath, content));
        }));
        this.refreshDependencies();
    }
    async updateDependenciesForFile(filePath) {
        const content = await this.getFileContent(filePath);
        this.dependenciesByFile.set(filePath, this.extractDependencies(filePath, content));
        this.refreshDependencies();
    }
    refreshDependencies() {
        this.dependencies.length = 0;
        for (const edges of this.dependenciesByFile.values()) {
            this.dependencies.push(...edges);
        }
    }
    extractDependencies(filePath, content) {
        const edges = [];
        const importRegex = /import\s+.*?from\s+["'](.+?)["']/g;
        const requireRegex = /require\(["'](.+?)["']\)/g;
        const includeRegex = /#include\s+["<](.+?)[">]/g;
        let match;
        while ((match = importRegex.exec(content))) {
            const target = match[1];
            if (target) {
                edges.push({ from: filePath, to: target, type: "import" });
            }
        }
        while ((match = requireRegex.exec(content))) {
            const target = match[1];
            if (target) {
                edges.push({ from: filePath, to: target, type: "require" });
            }
        }
        while ((match = includeRegex.exec(content))) {
            const target = match[1];
            if (target) {
                edges.push({ from: filePath, to: target, type: "include" });
            }
        }
        return edges;
    }
}
exports.ProjectIndex = ProjectIndex;
