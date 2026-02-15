import path from "node:path";
import { FileSystem, NodeFileSystem } from "./file-system";
import { CorrectionRecord } from "./types";

export class CorrectionStore {
  private readonly filePath: string;

  constructor(
    private readonly projectRoot: string,
    private readonly fileSystem: FileSystem = new NodeFileSystem()
  ) {
    this.filePath = path.join(projectRoot, ".codee", "corrections.json");
  }

  async list(): Promise<CorrectionRecord[]> {
    if (!(await this.fileSystem.exists(this.filePath))) {
      return [];
    }
    const raw = await this.fileSystem.readFile(this.filePath);
    try {
      const parsed = JSON.parse(raw) as CorrectionRecord[];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  async record(entry: CorrectionRecord): Promise<void> {
    const entries = await this.list();
    entries.unshift(entry);
    const trimmed = entries.slice(0, 200);
    await this.fileSystem.writeFile(this.filePath, JSON.stringify(trimmed, null, 2));
  }
}
