import path from "node:path";
import { MultiFileRefactor } from "../../src/intelligence/MultiFileRefactor";
import { FileSystem } from "../../src/intelligence/file-system";
import { GitClient } from "../../src/intelligence/git-client";

class MemoryFileSystem implements FileSystem {
  constructor(private readonly files: Map<string, string>) {}

  async readFile(filePath: string): Promise<string> {
    const value = this.files.get(filePath);
    if (value === undefined) {
      throw new Error(`Missing file: ${filePath}`);
    }
    return value;
  }

  async writeFile(filePath: string, contents: string): Promise<void> {
    this.files.set(filePath, contents);
  }

  async listFiles(root: string, extensions?: string[]): Promise<string[]> {
    const normalized = extensions?.map((ext) => ext.toLowerCase());
    return Array.from(this.files.keys()).filter((filePath) => {
      if (!filePath.startsWith(root)) {
        return false;
      }
      if (!normalized || normalized.length === 0) {
        return true;
      }
      return normalized.includes(path.extname(filePath).toLowerCase());
    });
  }

  async exists(filePath: string): Promise<boolean> {
    return this.files.has(filePath);
  }
}

class FakeGitClient implements GitClient {
  async isGitRepo(): Promise<boolean> {
    return false;
  }

  async diffPaths(): Promise<string> {
    return "";
  }

  async diffText(before: string, after: string): Promise<string> {
    if (before === after) {
      return "";
    }
    return "diff --fake";
  }

  async checkout(): Promise<void> {
    return;
  }
}

describe("MultiFileRefactor", () => {
  it("renames a symbol across files", async () => {
    const projectRoot = "/repo";
    const filePath = "/repo/src/math.ts";
    const fs = new MemoryFileSystem(
      new Map([
        [
          filePath,
          "export function add(a: number, b: number) { return a + b; }\n"
        ]
      ])
    );
    const refactor = new MultiFileRefactor(projectRoot, fs, new FakeGitClient());

    const result = await refactor.renameSymbol({ symbolName: "add", newName: "sum" });

    expect(result.changeSet.edits.length).toBe(1);
    expect(result.changeSet.edits[0].after).toContain("sum");
    expect(result.previewDiff).toContain("diff");
  });
});
