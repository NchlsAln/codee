import { readFile, writeFile, mkdir, appendFile } from "fs/promises";
import { existsSync, watch } from "fs";
import path from "path";
import os from "os";
import { DEFAULT_CONFIG } from "./defaults";
import { CodeeConfigSchema } from "./schema";
import { CodeeConfig, ConfigAuditEntry } from "./types";
import { migrateConfig } from "./migrations";

export interface SettingsManagerOptions {
  projectPath?: string;
  runtimeOverrides?: Partial<CodeeConfig>;
}

export class SettingsManager {
  private readonly projectPath?: string;
  private runtimeOverrides: Partial<CodeeConfig>;
  private projectWatcher?: ReturnType<typeof watch>;
  private userWatcher?: ReturnType<typeof watch>;

  constructor(options: SettingsManagerOptions) {
    this.projectPath = options.projectPath;
    this.runtimeOverrides = options.runtimeOverrides ?? {};
  }

  async resolve(): Promise<CodeeConfig> {
    const userConfig = await this.loadUserProfile();
    const projectConfig = await this.loadProjectConfig();
    const merged = this.mergeConfigs(DEFAULT_CONFIG, userConfig, projectConfig, this.runtimeOverrides);
    const parsed = CodeeConfigSchema.parse(merged);
    return migrateConfig(parsed);
  }

  setRuntimeOverrides(overrides: Partial<CodeeConfig>): void {
    this.runtimeOverrides = overrides;
  }

  async saveProjectConfig(config: CodeeConfig): Promise<void> {
    if (!this.projectPath) {
      return;
    }
    const configPath = path.join(this.projectPath, ".codee", "config.json");
    await mkdir(path.dirname(configPath), { recursive: true });
    await writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");
    await this.audit({
      timestamp: Date.now(),
      source: "project",
      path: configPath,
      summary: "Project config updated"
    });
  }

  async saveUserProfile(config: CodeeConfig): Promise<void> {
    const profilePath = this.getUserProfilePath();
    await mkdir(path.dirname(profilePath), { recursive: true });
    await writeFile(profilePath, JSON.stringify(config, null, 2), "utf-8");
    await this.audit({
      timestamp: Date.now(),
      source: "user",
      path: profilePath,
      summary: "User profile updated"
    });
  }

  watch(onChange: () => void): void {
    if (process.env.CODEE_DISABLE_WATCH === "1" || process.env.NODE_ENV === "test") {
      return;
    }
    const projectConfig = this.projectPath
      ? path.join(this.projectPath, ".codee", "config.json")
      : undefined;
    const userProfile = this.getUserProfilePath();

    if (projectConfig && existsSync(projectConfig)) {
      this.projectWatcher = watch(projectConfig, () => onChange());
    }
    if (existsSync(userProfile)) {
      this.userWatcher = watch(userProfile, () => onChange());
    }
  }

  dispose(): void {
    this.projectWatcher?.close();
    this.userWatcher?.close();
  }

  private async loadProjectConfig(): Promise<Partial<CodeeConfig>> {
    if (!this.projectPath) {
      return {};
    }
    const configPath = path.join(this.projectPath, ".codee", "config.json");
    return this.readConfig(configPath);
  }

  private async loadUserProfile(): Promise<Partial<CodeeConfig>> {
    const profilePath = this.getUserProfilePath();
    return this.readConfig(profilePath);
  }

  private async readConfig(filePath: string): Promise<Partial<CodeeConfig>> {
    try {
      const raw = await readFile(filePath, "utf-8");
      const parsed = JSON.parse(raw) as Partial<CodeeConfig>;
      return parsed;
    } catch (error) {
      return {};
    }
  }

  private getUserProfilePath(): string {
    return path.join(os.homedir(), "codee", "profile.json");
  }

  private mergeConfigs(
    base: CodeeConfig,
    user: Partial<CodeeConfig>,
    project: Partial<CodeeConfig>,
    runtime: Partial<CodeeConfig>
  ): CodeeConfig {
    return {
      ...base,
      ...user,
      ...project,
      ...runtime,
      core: { ...base.core, ...user.core, ...project.core, ...runtime.core },
      features: { ...base.features, ...user.features, ...project.features, ...runtime.features },
      languages: { ...base.languages, ...user.languages, ...project.languages, ...runtime.languages },
      privacy: { ...base.privacy, ...user.privacy, ...project.privacy, ...runtime.privacy },
      advanced: { ...base.advanced, ...user.advanced, ...project.advanced, ...runtime.advanced }
    };
  }

  private async audit(entry: ConfigAuditEntry): Promise<void> {
    const logPath = this.projectPath
      ? path.join(this.projectPath, ".codee", "audit.log")
      : path.join(os.homedir(), "codee", "audit.log");
    const line = `${new Date(entry.timestamp).toISOString()}|${entry.source}|${entry.path}|${entry.summary}\n`;
    await mkdir(path.dirname(logPath), { recursive: true });
    await appendFile(logPath, line, "utf-8");
  }
}
