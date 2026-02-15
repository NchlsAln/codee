import fs from "node:fs/promises";
import path from "node:path";

export interface FileSystem {
  readFile(filePath: string): Promise<string>;
  writeFile(filePath: string, contents: string): Promise<void>;
  listFiles(root: string, extensions?: string[]): Promise<string[]>;
  exists(filePath: string): Promise<boolean>;
}

export class NodeFileSystem implements FileSystem {
  async readFile(filePath: string): Promise<string> {
    return fs.readFile(filePath, "utf-8");
  }

  async writeFile(filePath: string, contents: string): Promise<void> {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, contents, "utf-8");
  }

  async listFiles(root: string, extensions?: string[]): Promise<string[]> {
    const results: string[] = [];
    const normalized = extensions?.map((ext) => ext.toLowerCase());

    const walk = async (dir: string): Promise<void> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
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
        const ext = path.extname(entry.name).toLowerCase();
        if (normalized.includes(ext)) {
          results.push(fullPath);
        }
      }
    };

    await walk(root);
    return results;
  }

  async exists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}
