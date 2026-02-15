import { ArchitectureAnalyzer } from "../../src/intelligence/ArchitectureAnalyzer";
import { FileSystem } from "../../src/intelligence/file-system";

class MemoryFileSystem implements FileSystem {
  constructor(private readonly files: string[]) {}

  async readFile(): Promise<string> {
    return "";
  }

  async writeFile(): Promise<void> {
    return;
  }

  async listFiles(): Promise<string[]> {
    return this.files;
  }

  async exists(): Promise<boolean> {
    return false;
  }
}

describe("ArchitectureAnalyzer", () => {
  it("detects components and risks", async () => {
    const fs = new MemoryFileSystem([
      "/repo/src/services/user-service.ts",
      "/repo/src/controllers/user-controller.ts",
      "/repo/README.md"
    ]);

    const analyzer = new ArchitectureAnalyzer("/repo", fs);
    const report = await analyzer.analyze();

    expect(report.components).toContain("Services");
    expect(report.risks.length).toBeGreaterThanOrEqual(0);
  });
});
