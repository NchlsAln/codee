/**
 * Extension-facing configuration model with JSDoc for each setting.
 */
export interface CodeeConfig {
  /** Schema version for migrations. */
  version: number;
  /** Core runtime settings for model selection and endpoints. */
  core: CoreSettings;
  /** Feature toggles for editor capabilities. */
  features: FeatureSettings;
  /** Language-specific settings and overrides. */
  languages: LanguageSettings;
  /** Privacy and data retention settings. */
  privacy: PrivacySettings;
  /** Advanced runtime tuning and prompt controls. */
  advanced: AdvancedSettings;
}

/** Core model and path settings. */
export interface CoreSettings {
  /** Active model identifier. */
  modelId: string;
  /** Optional chat model override. */
  chatModelId?: string;
  /** Optional code generation model override. */
  codeModelId?: string;
  /** Optional embeddings model override. */
  embeddingModelId?: string;
  /** Local model path (if applicable). */
  modelPath: string;
  /** Enable cloud fallback if local model unavailable. */
  cloudFallback: boolean;
  /** Optional custom endpoint for model inference. */
  modelEndpoint?: string;
  /** Pinned certificate fingerprints by hostname. */
  pinnedCertificates: Record<string, string[]>;
}

/** Feature toggles for assistance UX. */
export interface FeatureSettings {
  /** Enable autocomplete suggestions. */
  autoComplete: boolean;
  /** Enable inline suggestions. */
  inlineSuggestions: boolean;
  /** Enable code lens features. */
  codeLens: boolean;
  /** Prevent Codee from modifying files. */
  readOnlyMode: boolean;
}

/** Language enablement and LSP overrides. */
export interface LanguageSettings {
  /** List of enabled language IDs. */
  enabled: string[];
  /** Custom LSP server paths per language. */
  lspPaths: Record<string, string>;
}

/** Privacy and retention configuration. */
export interface PrivacySettings {
  /** Enable telemetry collection. */
  telemetryEnabled: boolean;
  /** PostHog endpoint for opt-in telemetry. */
  telemetryEndpoint: string;
  /** PostHog project API key for opt-in telemetry. */
  telemetryProjectKey: string;
  /** Enable crash reporting. */
  crashReportingEnabled: boolean;
  /** Sentry DSN for crash reporting. */
  crashReportingDsn: string;
  /** Enable diagnostic logging. */
  loggingEnabled: boolean;
  /** Retention in days for local data. */
  dataRetentionDays: number;
  /** Block non-local network access. */
  offlineMode: boolean;
}

/** Advanced prompt and context tuning. */
export interface AdvancedSettings {
  /** Max tokens reserved for context window. */
  contextWindowTokens: number;
  /** Temperature for model sampling. */
  temperature: number;
  /** Optional custom system prompts per language. */
  systemPrompts: Record<string, string>;
  /** Include glob patterns for indexing. */
  includePatterns: string[];
  /** Exclude glob patterns for indexing. */
  excludePatterns: string[];
  /** Project-specific instructions. */
  customInstructions: string;
  /** Team shared prompts for this project. */
  teamPrompts: string[];
  /** Theme preference for Codee UI. */
  themePreference: "vscode" | "light" | "dark" | "high-contrast";
  /** Delay before background indexing starts. */
  indexingIdleDelayMs: number;
  /** Max embeddings stored in the LRU cache. */
  embeddingCacheMaxEntries: number;
  /** Idle timeout before shutting down language servers. */
  languageServerIdleMs: number;
  /** Collect and store performance metrics. */
  performanceMetricsEnabled: boolean;
  /** Use deterministic mock LLM responses. */
  mockLlmEnabled: boolean;
  /** Enable developer tooling. */
  developerMode: boolean;
  /** Maximum files to index before warning. */
  maxIndexFiles: number;
}

export type SettingsSource = "default" | "user" | "project" | "runtime" | "vscode";
