import { CodeeConfig } from "./types";
import { DEFAULT_CONFIG } from "./defaults";

export type Migration = (config: CodeeConfig) => CodeeConfig;

export const migrations: Record<number, Migration> = {
  1: (config) => ({ ...DEFAULT_CONFIG, ...config })
};

export function migrateConfig(config: CodeeConfig): CodeeConfig {
  const targetVersion = DEFAULT_CONFIG.version;
  let current = config;
  for (let version = config.version; version <= targetVersion; version += 1) {
    const migration = migrations[version];
    if (migration) {
      current = migration(current);
    }
  }
  return { ...current, version: targetVersion };
}
