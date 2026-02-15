import { CodeeConfig } from "./types";
export interface SettingsManagerOptions {
    projectPath?: string;
    runtimeOverrides?: Partial<CodeeConfig>;
}
export declare class SettingsManager {
    private readonly projectPath?;
    private runtimeOverrides;
    private projectWatcher?;
    private userWatcher?;
    constructor(options: SettingsManagerOptions);
    resolve(): Promise<CodeeConfig>;
    setRuntimeOverrides(overrides: Partial<CodeeConfig>): void;
    saveProjectConfig(config: CodeeConfig): Promise<void>;
    saveUserProfile(config: CodeeConfig): Promise<void>;
    watch(onChange: () => void): void;
    dispose(): void;
    private loadProjectConfig;
    private loadUserProfile;
    private readConfig;
    private getUserProfilePath;
    private mergeConfigs;
    private audit;
}
