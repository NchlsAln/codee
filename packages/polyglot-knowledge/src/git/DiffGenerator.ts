import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { GitRunner } from "./GitRunner";

export class DiffGenerator {
  private readonly git: GitRunner;

  constructor(private readonly projectRoot: string) {
    this.git = new GitRunner(projectRoot);
  }

  async diffText(before: string, after: string, filePath: string): Promise<string> {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "codee-diff-"));
    const safeName = path.basename(filePath);
    const beforePath = path.join(tempDir, `before-${safeName}`);
    const afterPath = path.join(tempDir, `after-${safeName}`);

    try {
      await fs.writeFile(beforePath, before, "utf-8");
      await fs.writeFile(afterPath, after, "utf-8");
      return await this.git.exec(["diff", "--no-index", "--", beforePath, afterPath]);
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }
}
