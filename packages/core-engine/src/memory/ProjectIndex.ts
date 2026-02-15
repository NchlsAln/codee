import { EventEmitter } from "events";
import { readFile, readdir, stat } from "fs/promises";
import path from "path";
import chokidar from "chokidar";

type Watcher = {
  on: (event: string, cb: (filePath: string) => void) => Watcher;
  close: () => Promise<void> | void;
};

export interface FileMetadata {
  path: string;
  languageId: string;
  size: number;
  lastModified: number;
}

export interface DependencyEdge {
  from: string;
  to: string;
  type: "import" | "require" | "include";
}

export interface ProjectIndexSnapshot {
  root: string;
  files: FileMetadata[];
  dependencies: DependencyEdge[];
}

export class ProjectIndex extends EventEmitter {
  private readonly files = new Map<string, FileMetadata>();
  private readonly dependencies: DependencyEdge[] = [];
  private readonly dependenciesByFile = new Map<string, DependencyEdge[]>();
  private watcher: Watcher | null = null;

  constructor() {
    super();
  }

  async scan(projectPath: string, options?: { signal?: AbortSignal }): Promise<void> {
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

  async ensureFile(filePath: string): Promise<void> {
    const metadata = await this.buildMetadata(filePath);
    this.files.set(filePath, metadata);
    await this.updateDependenciesForFile(filePath);
  }

  getSnapshot(projectPath: string): ProjectIndexSnapshot {
    return {
      root: projectPath,
      files: Array.from(this.files.values()),
      dependencies: [...this.dependencies]
    };
  }

  getFileMetadata(filePath: string): FileMetadata | undefined {
    return this.files.get(filePath);
  }

  listFiles(): FileMetadata[] {
    return Array.from(this.files.values());
  }

  async getFileContent(filePath: string): Promise<string> {
    try {
      return await readFile(filePath, "utf-8");
    } catch (error) {
      return "";
    }
  }

  watch(projectPath: string): void {
    if (this.watcher) {
      return;
    }

    this.watcher = chokidar.watch(projectPath, {
      ignored: ["**/node_modules/**", "**/.git/**", "**/dist/**"]
    }) as Watcher;

    this.watcher.on("add", (filePath) => void this.onFileChanged(filePath));
    this.watcher.on("change", (filePath) => void this.onFileChanged(filePath));
    this.watcher.on("unlink", (filePath) => this.onFileRemoved(filePath));
  }

  async stopWatching(): Promise<void> {
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
    }
  }

  private async onFileChanged(filePath: string): Promise<void> {
    const metadata = await this.buildMetadata(filePath);
    this.files.set(filePath, metadata);
    await this.updateDependenciesForFile(filePath);
    this.emit("file.changed", { filePath, metadata });
  }

  private onFileRemoved(filePath: string): void {
    this.files.delete(filePath);
    this.dependenciesByFile.delete(filePath);
    this.refreshDependencies();
    this.emit("file.removed", { filePath });
  }

  private async walk(root: string, signal?: AbortSignal): Promise<string[]> {
    if (signal?.aborted) {
      return [];
    }
    const entries = await readdir(root, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
      if (signal?.aborted) {
        break;
      }
      const fullPath = path.join(root, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "dist") {
          continue;
        }
        files.push(...(await this.walk(fullPath, signal)));
      } else {
        files.push(fullPath);
      }
    }

    return files;
  }

  private async buildMetadata(filePath: string): Promise<FileMetadata> {
    const stats = await stat(filePath);
    const languageId = this.detectLanguage(filePath);
    return {
      path: filePath,
      languageId,
      size: stats.size,
      lastModified: stats.mtimeMs
    };
  }

  private detectLanguage(filePath: string): string {
    const ext = path.extname(filePath).toLowerCase();
    const map: Record<string, string> = {
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

  private async rebuildDependencies(): Promise<void> {
    this.dependenciesByFile.clear();
    const files = Array.from(this.files.keys());
    await Promise.all(files.map(async (filePath) => {
      const content = await this.getFileContent(filePath);
      this.dependenciesByFile.set(filePath, this.extractDependencies(filePath, content));
    }));
    this.refreshDependencies();
  }

  private async updateDependenciesForFile(filePath: string): Promise<void> {
    const content = await this.getFileContent(filePath);
    this.dependenciesByFile.set(filePath, this.extractDependencies(filePath, content));
    this.refreshDependencies();
  }

  private refreshDependencies(): void {
    this.dependencies.length = 0;
    for (const edges of this.dependenciesByFile.values()) {
      this.dependencies.push(...edges);
    }
  }

  private extractDependencies(filePath: string, content: string): DependencyEdge[] {
    const edges: DependencyEdge[] = [];
    const importRegex = /import\s+.*?from\s+["'](.+?)["']/g;
    const requireRegex = /require\(["'](.+?)["']\)/g;
    const includeRegex = /#include\s+["<](.+?)[">]/g;

    let match: RegExpExecArray | null;
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