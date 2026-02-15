import { chmod, mkdtemp, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

export async function createSecureTempDir(prefix: string): Promise<{ path: string; cleanup: () => Promise<void> }> {
  const dirPath = await mkdtemp(path.join(os.tmpdir(), prefix));
  try {
    await chmod(dirPath, 0o700);
  } catch {
    // Best-effort permissions tightening.
  }

  return {
    path: dirPath,
    cleanup: async () => {
      await rm(dirPath, { recursive: true, force: true });
    }
  };
}
