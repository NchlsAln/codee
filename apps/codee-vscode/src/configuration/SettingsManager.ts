import * as vscode from "vscode";
import { readFile, writeFile, mkdir, appendFile } from "fs/promises";
import { randomBytes } from "crypto";
import path from "path";
import os from "os";
import { z } from "zod";
import { CodeeConfigSchema } from "./schema";
import { DEFAULT_CONFIG } from "./defaults";
import { CodeeConfig, SettingsSource } from "./types";
import { KeychainStore } from "./KeychainStore";

interface SettingsManagerOptions {
  projectPath?: string;
}

export class SettingsManager {
  private readonly projectPath?: string;
  private readonly keychain = new KeychainStore();

  constructor(options: SettingsManagerOptions) {
    this.projectPath = options.projectPath;
  }

  async resolve(): Promise<CodeeConfig> {
    const vscodeConfig = this.loadVSCodeSettings();
    const userConfig = await this.loadUserProfile();
    const projectConfig = await this.loadProjectConfig();
    const merged = this.mergeConfigs(DEFAULT_CONFIG, vscodeConfig, userConfig, projectConfig);
    return CodeeConfigSchema.parse(merged);
  }

  async updateUserProfile(config: CodeeConfig): Promise<void> {
    const profilePath = this.getUserProfilePath();
    await mkdir(path.dirname(profilePath), { recursive: true });
    await writeFile(profilePath, JSON.stringify(config, null, 2), "utf-8");
    await this.audit("user", profilePath, "User profile updated");
  }

  async updateProjectConfig(config: CodeeConfig): Promise<void> {
    if (!this.projectPath) {
      return;
    }
    const configPath = path.join(this.projectPath, ".codee", "config.json");
    await mkdir(path.dirname(configPath), { recursive: true });
    await writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");
    await this.audit("project", configPath, "Project config updated");
  }

  async exportConfig(config: CodeeConfig): Promise<string> {
    return JSON.stringify(config, null, 2);
  }

  async importConfig(payload: string): Promise<CodeeConfig> {
    const parsed = JSON.parse(payload) as unknown;
    const config = CodeeConfigSchema.parse(parsed);
    return config;
  }

  async setApiKey(account: string, value: string): Promise<void> {
    await this.keychain.setPassword("codee", account, value);
  }

  async ensureDatabaseKey(): Promise<string | null> {
    const envKey = process.env.CODEE_DB_KEY;
    if (envKey) {
      return envKey;
    }
    const existing = await this.keychain.getPassword("codee", "db-key");
    if (existing) {
      return existing;
    }
    const key = randomBytes(32).toString("hex");
    await this.keychain.setPassword("codee", "db-key", key);
    return key;
  }

  async getApiKey(account: string): Promise<string | null> {
    return this.keychain.getPassword("codee", account);
  }

  async deleteApiKey(account: string): Promise<void> {
    await this.keychain.deletePassword("codee", account);
  }

  async recordAudit(source: SettingsSource, summary: string): Promise<void> {
    const location = source === "project" && this.projectPath
      ? path.join(this.projectPath, ".codee", "config.json")
      : this.getUserProfilePath();
    await this.audit(source, location, summary);
  }

  watch(onChange: () => void): vscode.Disposable[] {
    const disposables: vscode.Disposable[] = [];
    disposables.push(
      vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration("codee")) {
          onChange();
        }
      })
    );

    const projectConfig = this.projectPath
      ? path.join(this.projectPath, ".codee", "config.json")
      : undefined;
    const userProfile = this.getUserProfilePath();

    if (projectConfig) {
      const watcher = vscode.workspace.createFileSystemWatcher(
        new vscode.RelativePattern(path.dirname(projectConfig), path.basename(projectConfig))
      );
      watcher.onDidChange(onChange);
      watcher.onDidCreate(onChange);
      watcher.onDidDelete(onChange);
      disposables.push(watcher);
    }

    const userWatcher = vscode.workspace.createFileSystemWatcher(
      new vscode.RelativePattern(path.dirname(userProfile), path.basename(userProfile))
    );
    userWatcher.onDidChange(onChange);
    userWatcher.onDidCreate(onChange);
    userWatcher.onDidDelete(onChange);
    disposables.push(userWatcher);

    return disposables;
  }

  private loadVSCodeSettings(): Partial<CodeeConfig> {
    const config = vscode.workspace.getConfiguration("codee");
    return {
      core: {
        modelId: config.get<string>("core.modelId") ?? DEFAULT_CONFIG.core.modelId,
        chatModelId: config.get<string>("core.chatModelId") ?? DEFAULT_CONFIG.core.chatModelId,
        codeModelId: config.get<string>("core.codeModelId") ?? DEFAULT_CONFIG.core.codeModelId,
        embeddingModelId: config.get<string>("core.embeddingModelId") ?? DEFAULT_CONFIG.core.embeddingModelId,
        modelPath: config.get<string>("core.modelPath") ?? DEFAULT_CONFIG.core.modelPath,
        cloudFallback: config.get<boolean>("core.cloudFallback") ?? DEFAULT_CONFIG.core.cloudFallback,
        modelEndpoint: config.get<string>("core.modelEndpoint") ?? DEFAULT_CONFIG.core.modelEndpoint,
        pinnedCertificates:
          config.get<Record<string, string[]>>("core.pinnedCertificates") ?? DEFAULT_CONFIG.core.pinnedCertificates
      },
      features: {
        autoComplete: config.get<boolean>("features.autoComplete") ?? DEFAULT_CONFIG.features.autoComplete,
        inlineSuggestions: config.get<boolean>("features.inlineSuggestions") ?? DEFAULT_CONFIG.features.inlineSuggestions,
        codeLens: config.get<boolean>("features.codeLens") ?? DEFAULT_CONFIG.features.codeLens,
        readOnlyMode: config.get<boolean>("features.readOnlyMode") ?? DEFAULT_CONFIG.features.readOnlyMode
      },
      languages: {
        enabled: config.get<string[]>("languages.enabled") ?? DEFAULT_CONFIG.languages.enabled,
        lspPaths: config.get<Record<string, string>>("languages.lspPaths") ?? DEFAULT_CONFIG.languages.lspPaths
      },
      privacy: {
        telemetryEnabled: config.get<boolean>("privacy.telemetryEnabled") ?? DEFAULT_CONFIG.privacy.telemetryEnabled,
        telemetryEndpoint:
          config.get<string>("privacy.telemetryEndpoint") ?? DEFAULT_CONFIG.privacy.telemetryEndpoint,
        telemetryProjectKey:
          config.get<string>("privacy.telemetryProjectKey") ?? DEFAULT_CONFIG.privacy.telemetryProjectKey,
        crashReportingEnabled:
          config.get<boolean>("privacy.crashReportingEnabled") ?? DEFAULT_CONFIG.privacy.crashReportingEnabled,
        crashReportingDsn:
          config.get<string>("privacy.crashReportingDsn") ?? DEFAULT_CONFIG.privacy.crashReportingDsn,
        loggingEnabled: config.get<boolean>("privacy.loggingEnabled") ?? DEFAULT_CONFIG.privacy.loggingEnabled,
        dataRetentionDays: config.get<number>("privacy.dataRetentionDays") ?? DEFAULT_CONFIG.privacy.dataRetentionDays,
        offlineMode: config.get<boolean>("privacy.offlineMode") ?? DEFAULT_CONFIG.privacy.offlineMode
      },
      advanced: {
        contextWindowTokens:
          config.get<number>("advanced.contextWindowTokens") ?? DEFAULT_CONFIG.advanced.contextWindowTokens,
        temperature: config.get<number>("advanced.temperature") ?? DEFAULT_CONFIG.advanced.temperature,
        systemPrompts: config.get<Record<string, string>>("advanced.systemPrompts") ?? DEFAULT_CONFIG.advanced.systemPrompts,
        includePatterns: config.get<string[]>("advanced.includePatterns") ?? DEFAULT_CONFIG.advanced.includePatterns,
        excludePatterns: config.get<string[]>("advanced.excludePatterns") ?? DEFAULT_CONFIG.advanced.excludePatterns,
        customInstructions: config.get<string>("advanced.customInstructions") ?? DEFAULT_CONFIG.advanced.customInstructions,
        teamPrompts: config.get<string[]>("advanced.teamPrompts") ?? DEFAULT_CONFIG.advanced.teamPrompts,
        themePreference:
          config.get<CodeeConfig["advanced"]["themePreference"]>("advanced.themePreference") ??
          DEFAULT_CONFIG.advanced.themePreference,
        indexingIdleDelayMs:
          config.get<number>("advanced.indexingIdleDelayMs") ?? DEFAULT_CONFIG.advanced.indexingIdleDelayMs,
        embeddingCacheMaxEntries:
          config.get<number>("advanced.embeddingCacheMaxEntries") ?? DEFAULT_CONFIG.advanced.embeddingCacheMaxEntries,
        languageServerIdleMs:
          config.get<number>("advanced.languageServerIdleMs") ?? DEFAULT_CONFIG.advanced.languageServerIdleMs,
        performanceMetricsEnabled:
          config.get<boolean>("advanced.performanceMetricsEnabled") ?? DEFAULT_CONFIG.advanced.performanceMetricsEnabled,
        mockLlmEnabled: config.get<boolean>("advanced.mockLlmEnabled") ?? DEFAULT_CONFIG.advanced.mockLlmEnabled,
        developerMode: config.get<boolean>("advanced.developerMode") ?? DEFAULT_CONFIG.advanced.developerMode,
        maxIndexFiles: config.get<number>("advanced.maxIndexFiles") ?? DEFAULT_CONFIG.advanced.maxIndexFiles
      }
    };
  }

  private async loadUserProfile(): Promise<Partial<CodeeConfig>> {
    return this.readConfig(this.getUserProfilePath());
  }

  private async loadProjectConfig(): Promise<Partial<CodeeConfig>> {
    if (!this.projectPath) {
      return {};
    }
    return this.readConfig(path.join(this.projectPath, ".codee", "config.json"));
  }

  private async readConfig(filePath: string): Promise<Partial<CodeeConfig>> {
    try {
      const raw = await readFile(filePath, "utf-8");
      const parsed = JSON.parse(raw) as unknown;
      return z.record(z.any()).parse(parsed) as Partial<CodeeConfig>;
    } catch (error) {
      return {};
    }
  }

  private getUserProfilePath(): string {
    return path.join(os.homedir(), "codee", "profile.json");
  }

  private mergeConfigs(
    base: CodeeConfig,
    vscodeConfig: Partial<CodeeConfig>,
    user: Partial<CodeeConfig>,
    project: Partial<CodeeConfig>
  ): CodeeConfig {
    return {
      ...base,
      ...vscodeConfig,
      ...user,
      ...project,
      core: { ...base.core, ...vscodeConfig.core, ...user.core, ...project.core },
      features: { ...base.features, ...vscodeConfig.features, ...user.features, ...project.features },
      languages: { ...base.languages, ...vscodeConfig.languages, ...user.languages, ...project.languages },
      privacy: { ...base.privacy, ...vscodeConfig.privacy, ...user.privacy, ...project.privacy },
      advanced: { ...base.advanced, ...vscodeConfig.advanced, ...user.advanced, ...project.advanced }
    };
  }

  private async audit(source: SettingsSource, pathValue: string, summary: string): Promise<void> {
    const logPath = this.projectPath
      ? path.join(this.projectPath, ".codee", "audit.log")
      : path.join(os.homedir(), "codee", "audit.log");
    const line = `${new Date().toISOString()}|${source}|${pathValue}|${summary}\n`;
    await mkdir(path.dirname(logPath), { recursive: true });
    await appendFile(logPath, line, "utf-8");
  }
}
