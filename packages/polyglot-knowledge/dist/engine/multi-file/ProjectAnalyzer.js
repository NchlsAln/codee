"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAnalyzer = void 0;
const promises_1 = __importDefault(require("node:fs/promises"));
const node_path_1 = __importDefault(require("node:path"));
const DEFAULT_IGNORE = ["node_modules", ".git", "dist", "build", "out", "target", "coverage", ".codee"];
const ENTRY_POINT_NAMES = [
    "main.py",
    "__main__.py",
    "index.ts",
    "main.ts",
    "app.ts",
    "main.rs",
    "lib.rs",
    "main.go",
    "Main.java",
    "main.cpp",
    "main.cc",
    "main.cxx",
    "index.js",
    "main.js"
];
const EXTENSION_LANGUAGE = {
    ".py": "python",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".rs": "rust",
    ".go": "go",
    ".java": "java",
    ".cpp": "cpp",
    ".cc": "cpp",
    ".cxx": "cpp",
    ".hpp": "cpp",
    ".h": "cpp",
    ".js": "javascript",
    ".jsx": "javascript"
};
const SUPPORTED_EXTENSIONS = Object.keys(EXTENSION_LANGUAGE);
class ProjectAnalyzer {
    projectRoot;
    registry;
    constructor(projectRoot, registry) {
        this.projectRoot = projectRoot;
        this.registry = registry;
    }
    async analyze(projectPath, languageFilter) {
        const rootPath = projectPath ?? this.projectRoot;
        if (!rootPath) {
            throw new Error("ProjectAnalyzer requires a project path.");
        }
        const ignoreMatchers = await this.loadIgnoreMatchers(rootPath);
        const filePaths = await this.discoverSourceFiles(rootPath, ignoreMatchers);
        const rawFiles = await this.parseFiles(filePaths, rootPath, languageFilter);
        const fileIndex = this.buildFileIndex(rawFiles, rootPath);
        const dependencies = this.buildDependencyGraph(rawFiles, fileIndex);
        const cycleFiles = this.findCycles(dependencies);
        for (const file of rawFiles) {
            if (cycleFiles.has(file.path)) {
                file.translationComplexity = "complex";
            }
        }
        const entryPoints = this.detectEntryPoints(rawFiles, dependencies);
        const modules = this.detectModules(rawFiles, rootPath);
        const externalDeps = this.collectExternalDeps(rawFiles);
        return {
            rootPath,
            files: rawFiles,
            entryPoints,
            modules,
            dependencies,
            externalDeps
        };
    }
    detectLanguage(filePath) {
        const fromRegistry = this.registry?.detectLanguage(filePath)?.id;
        if (fromRegistry && this.isSupportedLanguage(fromRegistry)) {
            return fromRegistry;
        }
        const ext = node_path_1.default.extname(filePath).toLowerCase();
        return EXTENSION_LANGUAGE[ext] ?? "typescript";
    }
    isSupportedLanguage(id) {
        return ["python", "typescript", "rust", "go", "java", "cpp", "javascript"].includes(id);
    }
    async discoverSourceFiles(rootPath, ignoreMatchers) {
        const results = [];
        const queue = [rootPath];
        while (queue.length > 0) {
            const current = queue.pop();
            if (!current) {
                continue;
            }
            const entries = await promises_1.default.readdir(current, { withFileTypes: true });
            for (const entry of entries) {
                if (DEFAULT_IGNORE.includes(entry.name)) {
                    continue;
                }
                const fullPath = node_path_1.default.join(current, entry.name);
                const relative = node_path_1.default.relative(rootPath, fullPath).replace(/\\/g, "/");
                if (ignoreMatchers.some((matcher) => matcher(relative, entry.isDirectory()))) {
                    continue;
                }
                if (entry.isDirectory()) {
                    queue.push(fullPath);
                    continue;
                }
                const ext = node_path_1.default.extname(entry.name).toLowerCase();
                if (!SUPPORTED_EXTENSIONS.includes(ext)) {
                    continue;
                }
                results.push(fullPath);
            }
        }
        return results;
    }
    async parseFiles(filePaths, rootPath, languageFilter) {
        const results = [];
        for (const filePath of filePaths) {
            const language = this.detectLanguage(filePath);
            if (languageFilter && language !== languageFilter) {
                continue;
            }
            const content = await promises_1.default.readFile(filePath, "utf-8");
            const rawImports = this.extractImports(content, language);
            const exports = this.extractExports(content, language);
            const ast = this.buildAst(content, rawImports, exports);
            const translationComplexity = this.scoreComplexity(content, language, rawImports);
            results.push({
                path: filePath,
                language,
                content,
                ast,
                imports: rawImports.map((entry) => ({
                    source: entry.source,
                    symbols: entry.symbols,
                    isExternal: false
                })),
                exports,
                translationComplexity
            });
        }
        return results;
    }
    buildFileIndex(files, rootPath) {
        const index = new Map();
        for (const file of files) {
            const relative = node_path_1.default.relative(rootPath, file.path).replace(/\\/g, "/");
            const withoutExt = relative.replace(new RegExp(`${node_path_1.default.extname(relative)}$`), "");
            const dotted = withoutExt.split("/").join(".");
            const base = node_path_1.default.basename(withoutExt);
            index.set(relative, file.path);
            index.set(withoutExt, file.path);
            index.set(dotted, file.path);
            index.set(base, file.path);
        }
        return index;
    }
    buildDependencyGraph(files, index) {
        const graph = {};
        const fileSet = new Set(files.map((file) => file.path));
        for (const file of files) {
            const resolved = [];
            const updatedImports = [];
            for (const entry of file.imports) {
                const resolvedPath = this.resolveImport(entry.source, file.path, index, fileSet);
                if (resolvedPath) {
                    resolved.push(resolvedPath);
                    updatedImports.push({ ...entry, isExternal: false });
                }
                else {
                    updatedImports.push({ ...entry, isExternal: true });
                }
            }
            file.imports = updatedImports;
            graph[file.path] = Array.from(new Set(resolved));
        }
        return graph;
    }
    findCycles(graph) {
        const visiting = new Set();
        const visited = new Set();
        const inCycle = new Set();
        const visit = (node, stack) => {
            if (visited.has(node)) {
                return;
            }
            if (visiting.has(node)) {
                for (const entry of stack) {
                    inCycle.add(entry);
                }
                inCycle.add(node);
                return;
            }
            visiting.add(node);
            const next = graph[node] ?? [];
            for (const neighbor of next) {
                visit(neighbor, [...stack, node]);
            }
            visiting.delete(node);
            visited.add(node);
        };
        for (const node of Object.keys(graph)) {
            visit(node, []);
        }
        return inCycle;
    }
    resolveImport(source, filePath, index, fileSet) {
        if (source.startsWith(".")) {
            const resolved = node_path_1.default.resolve(node_path_1.default.dirname(filePath), source).replace(/\\/g, "/");
            const candidates = this.expandImportCandidates(resolved);
            for (const candidate of candidates) {
                const matched = fileSet.has(candidate) ? candidate : index.get(candidate);
                if (matched) {
                    return matched;
                }
            }
            return undefined;
        }
        return index.get(source);
    }
    expandImportCandidates(resolvedBase) {
        const candidates = [];
        for (const ext of SUPPORTED_EXTENSIONS) {
            candidates.push(`${resolvedBase}${ext}`);
            candidates.push(node_path_1.default.join(resolvedBase, `index${ext}`));
        }
        candidates.push(resolvedBase);
        return candidates.map((candidate) => candidate.replace(/\\/g, "/"));
    }
    detectEntryPoints(files, graph) {
        const imported = new Set(Object.values(graph).flat());
        const entries = files
            .filter((file) => !imported.has(file.path))
            .map((file) => file.path);
        const byName = files
            .filter((file) => ENTRY_POINT_NAMES.includes(node_path_1.default.basename(file.path)))
            .map((file) => file.path);
        return Array.from(new Set([...entries, ...byName]));
    }
    detectModules(files, rootPath) {
        const modules = new Map();
        for (const file of files) {
            const relative = node_path_1.default.relative(rootPath, file.path).replace(/\\/g, "/");
            const dir = node_path_1.default.dirname(relative);
            const name = dir === "." ? "root" : dir.split("/").join(".");
            const module = modules.get(name) ?? { name, path: dir, files: [] };
            module.files.push(file.path);
            modules.set(name, module);
        }
        return Array.from(modules.values());
    }
    collectExternalDeps(files) {
        const deps = new Set();
        for (const file of files) {
            for (const entry of file.imports) {
                if (entry.isExternal) {
                    deps.add(entry.source);
                }
            }
        }
        return Array.from(deps.values());
    }
    extractImports(content, language) {
        const imports = [];
        if (language === "python") {
            const pattern = /^(?:from\s+([\w.]+)\s+import\s+([\w*,\s]+)|import\s+([\w.]+))/gm;
            for (const match of content.matchAll(pattern)) {
                if (match[1]) {
                    imports.push({ source: match[1], symbols: this.splitSymbols(match[2] ?? "") });
                }
                else if (match[3]) {
                    imports.push({ source: match[3], symbols: [] });
                }
            }
            return imports;
        }
        if (language === "typescript" || language === "javascript") {
            const pattern = /import\s+(?:[^"']+\s+from\s+)?["']([^"']+)["']/g;
            for (const match of content.matchAll(pattern)) {
                const source = match[1];
                if (source) {
                    imports.push({ source, symbols: [] });
                }
            }
            return imports;
        }
        if (language === "rust") {
            const pattern = /\buse\s+([^;]+);/g;
            for (const match of content.matchAll(pattern)) {
                const source = match[1];
                if (source) {
                    imports.push({ source: source.trim(), symbols: [] });
                }
            }
            return imports;
        }
        if (language === "go") {
            const pattern = /import\s+(?:\(?\s*)"([^"]+)"/g;
            for (const match of content.matchAll(pattern)) {
                const source = match[1];
                if (source) {
                    imports.push({ source, symbols: [] });
                }
            }
            return imports;
        }
        if (language === "java") {
            const pattern = /import\s+([\w.]+);/g;
            for (const match of content.matchAll(pattern)) {
                const source = match[1];
                if (source) {
                    imports.push({ source, symbols: [] });
                }
            }
            return imports;
        }
        if (language === "cpp") {
            const pattern = /#include\s+["<]([^">]+)[">]/g;
            for (const match of content.matchAll(pattern)) {
                const source = match[1];
                if (source) {
                    imports.push({ source, symbols: [] });
                }
            }
            return imports;
        }
        return imports;
    }
    extractExports(content, language) {
        const exports = [];
        if (language === "typescript" || language === "javascript") {
            const pattern = /export\s+(?:default\s+)?(class|function|const|interface|type)?\s*([A-Za-z_][\w]*)/g;
            for (const match of content.matchAll(pattern)) {
                const name = match[2];
                if (name) {
                    exports.push({ name, type: match[1] ?? "symbol" });
                }
            }
            const named = /export\s*\{([^}]+)\}/g;
            for (const match of content.matchAll(named)) {
                const symbolList = match[1];
                if (!symbolList) {
                    continue;
                }
                const symbols = symbolList.split(",").map((value) => value.trim().split(/\s+as\s+/)[0]);
                for (const symbol of symbols) {
                    if (symbol) {
                        exports.push({ name: symbol, type: "named" });
                    }
                }
            }
            return exports;
        }
        if (language === "python") {
            const pattern = /^(?:class|def)\s+([A-Za-z_][\w]*)/gm;
            for (const match of content.matchAll(pattern)) {
                const name = match[1];
                if (name) {
                    exports.push({ name, type: "symbol" });
                }
            }
            return exports;
        }
        if (language === "rust") {
            const pattern = /pub\s+(?:struct|enum|fn|trait)\s+([A-Za-z_][\w]*)/g;
            for (const match of content.matchAll(pattern)) {
                const name = match[1];
                if (name) {
                    exports.push({ name, type: "symbol" });
                }
            }
            return exports;
        }
        if (language === "go") {
            const pattern = /^(?:func|type|var|const)\s+([A-Z][\w]*)/gm;
            for (const match of content.matchAll(pattern)) {
                const name = match[1];
                if (name) {
                    exports.push({ name, type: "symbol" });
                }
            }
            return exports;
        }
        if (language === "java") {
            const pattern = /public\s+(?:class|interface|enum)\s+([A-Za-z_][\w]*)/g;
            for (const match of content.matchAll(pattern)) {
                const name = match[1];
                if (name) {
                    exports.push({ name, type: "symbol" });
                }
            }
            return exports;
        }
        if (language === "cpp") {
            const pattern = /(?:class|struct)\s+([A-Za-z_][\w]*)/g;
            for (const match of content.matchAll(pattern)) {
                const name = match[1];
                if (name) {
                    exports.push({ name, type: "symbol" });
                }
            }
            return exports;
        }
        return exports;
    }
    buildAst(content, imports, exports) {
        const children = [];
        for (const entry of imports) {
            children.push({ type: "import", value: entry.source });
        }
        for (const entry of exports) {
            children.push({ type: "export", name: entry.name, value: entry.type });
        }
        return { type: "file", children };
    }
    scoreComplexity(content, language, imports) {
        const lineCount = content.split(/\r?\n/).length;
        const hasAsync = /\basync\b|\bawait\b/.test(content);
        const hasGenerics = /<\s*[A-Za-z_][\w,\s]*>|\bGeneric\b|template\s*</.test(content);
        const hasConcurrency = /\bthread\b|\bgoroutine\b|\bspawn\b|\bmutex\b|\bchannel\b/.test(content);
        const hasDataClass = /\bdataclass\b|\bdata\s+class\b|\brecord\b/.test(content);
        if (hasAsync && hasGenerics) {
            return "complex";
        }
        let score = 0;
        if (lineCount > 300)
            score += 2;
        if (lineCount > 120)
            score += 1;
        if (imports.length > 8)
            score += 1;
        if (hasConcurrency)
            score += 1;
        if (hasAsync)
            score += 1;
        if (hasGenerics)
            score += 1;
        if (score >= 3) {
            return "complex";
        }
        if (hasDataClass && score <= 1) {
            return "simple";
        }
        if (language === "python" && /class\s+\w+\s*\(.*\):/.test(content) && score <= 1) {
            return "simple";
        }
        return "moderate";
    }
    splitSymbols(raw) {
        return raw
            .split(",")
            .map((symbol) => symbol.trim())
            .filter(Boolean);
    }
    async loadIgnoreMatchers(rootPath) {
        const patterns = [];
        const gitignore = node_path_1.default.join(rootPath, ".gitignore");
        try {
            const content = await promises_1.default.readFile(gitignore, "utf-8");
            for (const line of content.split(/\r?\n/)) {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith("#")) {
                    continue;
                }
                patterns.push(trimmed);
            }
        }
        catch {
            // No .gitignore.
        }
        return patterns.map((pattern) => this.compileIgnore(pattern));
    }
    compileIgnore(pattern) {
        const normalized = pattern.replace(/\\/g, "/");
        const anchored = normalized.startsWith("/") ? normalized.slice(1) : normalized;
        const isDir = anchored.endsWith("/");
        const raw = isDir ? anchored.slice(0, -1) : anchored;
        const prefixed = raw.includes("/") ? raw : `**/${raw}`;
        const escaped = prefixed
            .split("**").map((segment) => segment.replace(/[.+^${}()|[\]\\]/g, "\\$&"))
            .join(".*");
        const regex = new RegExp(`^${escaped.replace(/\*/g, "[^/]*")}$`);
        return (relativePath, isDirectory) => {
            if (isDir && !isDirectory) {
                return false;
            }
            return regex.test(relativePath);
        };
    }
}
exports.ProjectAnalyzer = ProjectAnalyzer;
