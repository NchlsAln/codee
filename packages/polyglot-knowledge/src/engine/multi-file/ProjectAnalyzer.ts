import fs from "node:fs/promises";
import path from "node:path";
import { LanguageRegistry } from "@codee/lang-common";
import {
  ASTNode,
  DependencyGraph,
  Export,
  Import,
  LanguageId,
  Module,
  ProjectStructure,
  SourceFile
} from "../../types";

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

const EXTENSION_LANGUAGE: Record<string, LanguageId> = {
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

interface RawImport {
  source: string;
  symbols: string[];
}

export class ProjectAnalyzer {
  constructor(
    private readonly projectRoot?: string,
    private readonly registry?: LanguageRegistry
  ) {}

  async analyze(projectPath: string, languageFilter?: LanguageId): Promise<ProjectStructure> {
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

  private detectLanguage(filePath: string): LanguageId {
    const fromRegistry = this.registry?.detectLanguage(filePath)?.id;
    if (fromRegistry && this.isSupportedLanguage(fromRegistry)) {
      return fromRegistry;
    }
    const ext = path.extname(filePath).toLowerCase();
    return EXTENSION_LANGUAGE[ext] ?? "typescript";
  }

  private isSupportedLanguage(id: string): id is LanguageId {
    return ["python", "typescript", "rust", "go", "java", "cpp", "javascript"].includes(id);
  }

  private async discoverSourceFiles(rootPath: string, ignoreMatchers: IgnoreMatcher[]): Promise<string[]> {
    const results: string[] = [];
    const queue: string[] = [rootPath];

    while (queue.length > 0) {
      const current = queue.pop();
      if (!current) {
        continue;
      }
      const entries = await fs.readdir(current, { withFileTypes: true });
      for (const entry of entries) {
        if (DEFAULT_IGNORE.includes(entry.name)) {
          continue;
        }
        const fullPath = path.join(current, entry.name);
        const relative = path.relative(rootPath, fullPath).replace(/\\/g, "/");
        if (ignoreMatchers.some((matcher) => matcher(relative, entry.isDirectory()))) {
          continue;
        }
        if (entry.isDirectory()) {
          queue.push(fullPath);
          continue;
        }
        const ext = path.extname(entry.name).toLowerCase();
        if (!SUPPORTED_EXTENSIONS.includes(ext)) {
          continue;
        }
        results.push(fullPath);
      }
    }

    return results;
  }

  private async parseFiles(
    filePaths: string[],
    rootPath: string,
    languageFilter?: LanguageId
  ): Promise<SourceFile[]> {
    const results: SourceFile[] = [];

    for (const filePath of filePaths) {
      const language = this.detectLanguage(filePath);
      if (languageFilter && language !== languageFilter) {
        continue;
      }
      const content = await fs.readFile(filePath, "utf-8");
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

  private buildFileIndex(files: SourceFile[], rootPath: string): Map<string, string> {
    const index = new Map<string, string>();
    for (const file of files) {
      const relative = path.relative(rootPath, file.path).replace(/\\/g, "/");
      const withoutExt = relative.replace(new RegExp(`${path.extname(relative)}$`), "");
      const dotted = withoutExt.split("/").join(".");
      const base = path.basename(withoutExt);
      index.set(relative, file.path);
      index.set(withoutExt, file.path);
      index.set(dotted, file.path);
      index.set(base, file.path);
    }
    return index;
  }

  private buildDependencyGraph(files: SourceFile[], index: Map<string, string>): DependencyGraph {
    const graph: DependencyGraph = {};
    const fileSet = new Set(files.map((file) => file.path));

    for (const file of files) {
      const resolved: string[] = [];
      const updatedImports: Import[] = [];
      for (const entry of file.imports) {
        const resolvedPath = this.resolveImport(entry.source, file.path, index, fileSet);
        if (resolvedPath) {
          resolved.push(resolvedPath);
          updatedImports.push({ ...entry, isExternal: false });
        } else {
          updatedImports.push({ ...entry, isExternal: true });
        }
      }
      file.imports = updatedImports;
      graph[file.path] = Array.from(new Set(resolved));
    }

    return graph;
  }

  private findCycles(graph: DependencyGraph): Set<string> {
    const visiting = new Set<string>();
    const visited = new Set<string>();
    const inCycle = new Set<string>();

    const visit = (node: string, stack: string[]): void => {
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

  private resolveImport(
    source: string,
    filePath: string,
    index: Map<string, string>,
    fileSet: Set<string>
  ): string | undefined {
    if (source.startsWith(".")) {
      const resolved = path.resolve(path.dirname(filePath), source).replace(/\\/g, "/");
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

  private expandImportCandidates(resolvedBase: string): string[] {
    const candidates: string[] = [];
    for (const ext of SUPPORTED_EXTENSIONS) {
      candidates.push(`${resolvedBase}${ext}`);
      candidates.push(path.join(resolvedBase, `index${ext}`));
    }
    candidates.push(resolvedBase);
    return candidates.map((candidate) => candidate.replace(/\\/g, "/"));
  }

  private detectEntryPoints(files: SourceFile[], graph: DependencyGraph): string[] {
    const imported = new Set(Object.values(graph).flat());
    const entries = files
      .filter((file) => !imported.has(file.path))
      .map((file) => file.path);
    const byName = files
      .filter((file) => ENTRY_POINT_NAMES.includes(path.basename(file.path)))
      .map((file) => file.path);
    return Array.from(new Set([...entries, ...byName]));
  }

  private detectModules(files: SourceFile[], rootPath: string): Module[] {
    const modules = new Map<string, Module>();
    for (const file of files) {
      const relative = path.relative(rootPath, file.path).replace(/\\/g, "/");
      const dir = path.dirname(relative);
      const name = dir === "." ? "root" : dir.split("/").join(".");
      const module = modules.get(name) ?? { name, path: dir, files: [] };
      module.files.push(file.path);
      modules.set(name, module);
    }
    return Array.from(modules.values());
  }

  private collectExternalDeps(files: SourceFile[]): string[] {
    const deps = new Set<string>();
    for (const file of files) {
      for (const entry of file.imports) {
        if (entry.isExternal) {
          deps.add(entry.source);
        }
      }
    }
    return Array.from(deps.values());
  }

  private extractImports(content: string, language: LanguageId): RawImport[] {
    const imports: RawImport[] = [];
    if (language === "python") {
      const pattern = /^(?:from\s+([\w.]+)\s+import\s+([\w*,\s]+)|import\s+([\w.]+))/gm;
      for (const match of content.matchAll(pattern)) {
        if (match[1]) {
          imports.push({ source: match[1], symbols: this.splitSymbols(match[2] ?? "") });
        } else if (match[3]) {
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

  private extractExports(content: string, language: LanguageId): Export[] {
    const exports: Export[] = [];
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

  private buildAst(content: string, imports: RawImport[], exports: Export[]): ASTNode {
    const children: ASTNode[] = [];
    for (const entry of imports) {
      children.push({ type: "import", value: entry.source });
    }
    for (const entry of exports) {
      children.push({ type: "export", name: entry.name, value: entry.type });
    }
    return { type: "file", children };
  }

  private scoreComplexity(content: string, language: LanguageId, imports: RawImport[]): "simple" | "moderate" | "complex" {
    const lineCount = content.split(/\r?\n/).length;
    const hasAsync = /\basync\b|\bawait\b/.test(content);
    const hasGenerics = /<\s*[A-Za-z_][\w,\s]*>|\bGeneric\b|template\s*</.test(content);
    const hasConcurrency = /\bthread\b|\bgoroutine\b|\bspawn\b|\bmutex\b|\bchannel\b/.test(content);
    const hasDataClass = /\bdataclass\b|\bdata\s+class\b|\brecord\b/.test(content);

    if (hasAsync && hasGenerics) {
      return "complex";
    }

    let score = 0;
    if (lineCount > 300) score += 2;
    if (lineCount > 120) score += 1;
    if (imports.length > 8) score += 1;
    if (hasConcurrency) score += 1;
    if (hasAsync) score += 1;
    if (hasGenerics) score += 1;

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

  private splitSymbols(raw: string): string[] {
    return raw
      .split(",")
      .map((symbol) => symbol.trim())
      .filter(Boolean);
  }

  private async loadIgnoreMatchers(rootPath: string): Promise<IgnoreMatcher[]> {
    const patterns: string[] = [];
    const gitignore = path.join(rootPath, ".gitignore");
    try {
      const content = await fs.readFile(gitignore, "utf-8");
      for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) {
          continue;
        }
        patterns.push(trimmed);
      }
    } catch {
      // No .gitignore.
    }

    return patterns.map((pattern) => this.compileIgnore(pattern));
  }

  private compileIgnore(pattern: string): IgnoreMatcher {
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

type IgnoreMatcher = (relativePath: string, isDirectory: boolean) => boolean;
