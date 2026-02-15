import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { SettingsManager } from "../../config/SettingsManager";
import { DEFAULT_CONFIG } from "../../config/defaults";

const PROJECT_CONFIG = {
  core: {
    modelId: "project-model"
  },
  advanced: {
    customInstructions: "Project instructions"
  }
};

const USER_CONFIG = {
  core: {
    modelId: "user-model"
  },
  advanced: {
    customInstructions: "User instructions"
  }
};

describe("SettingsManager", () => {
  it("merges configs with runtime override precedence", async () => {
    const tempRoot = await mkdtemp(path.join(os.tmpdir(), "codee-settings-"));
    const projectPath = path.join(tempRoot, "project");
    const homeSpy = jest.spyOn(os, "homedir").mockReturnValue(tempRoot);

    try {
      await mkdir(path.join(projectPath, ".codee"), { recursive: true });
      await writeFile(
        path.join(projectPath, ".codee", "config.json"),
        JSON.stringify(PROJECT_CONFIG, null, 2),
        "utf-8"
      );
      await mkdir(path.join(tempRoot, "codee"), { recursive: true });
      await writeFile(
        path.join(tempRoot, "codee", "profile.json"),
        JSON.stringify(USER_CONFIG, null, 2),
        "utf-8"
      );

      const manager = new SettingsManager({
        projectPath,
        runtimeOverrides: {
          core: {
            modelId: "runtime-model"
          }
        }
      });

      const resolved = await manager.resolve();

      expect(resolved.core.modelId).toBe("runtime-model");
      expect(resolved.advanced.customInstructions).toBe("Project instructions");
      expect(resolved.features.autoComplete).toBe(DEFAULT_CONFIG.features.autoComplete);
    } finally {
      homeSpy.mockRestore();
      await rm(tempRoot, { recursive: true, force: true });
    }
  });
});
