import { CodeeConfig } from "./types";
export type Migration = (config: CodeeConfig) => CodeeConfig;
export declare const migrations: Record<number, Migration>;
export declare function migrateConfig(config: CodeeConfig): CodeeConfig;
