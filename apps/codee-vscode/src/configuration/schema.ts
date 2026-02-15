import { z } from "zod";

export const CodeeConfigSchema = z.object({
  version: z.number().int().min(1),
  core: z.object({
    modelId: z.string(),
    chatModelId: z.string().optional().default(""),
    codeModelId: z.string().optional().default(""),
    embeddingModelId: z.string().optional().default(""),
    modelPath: z.string().optional().default(""),
    cloudFallback: z.boolean(),
    modelEndpoint: z.string().optional().default(""),
    pinnedCertificates: z.record(z.array(z.string())).default({})
  }),
  features: z.object({
    autoComplete: z.boolean(),
    inlineSuggestions: z.boolean(),
    codeLens: z.boolean(),
    readOnlyMode: z.boolean().default(false)
  }),
  languages: z.object({
    enabled: z.array(z.string()),
    lspPaths: z.record(z.string())
  }),
  privacy: z.object({
    telemetryEnabled: z.boolean(),
    telemetryEndpoint: z.string().optional().default(""),
    telemetryProjectKey: z.string().optional().default(""),
    crashReportingEnabled: z.boolean().optional().default(false),
    crashReportingDsn: z.string().optional().default(""),
    loggingEnabled: z.boolean(),
    dataRetentionDays: z.number().int().min(0),
    offlineMode: z.boolean().default(false)
  }),
  advanced: z.object({
    contextWindowTokens: z.number().int().min(512),
    temperature: z.number().min(0).max(1),
    systemPrompts: z.record(z.string()),
    includePatterns: z.array(z.string()),
    excludePatterns: z.array(z.string()),
    customInstructions: z.string(),
    teamPrompts: z.array(z.string()),
    themePreference: z.enum(["vscode", "light", "dark", "high-contrast"]),
    indexingIdleDelayMs: z.number().int().min(0).default(1500),
    embeddingCacheMaxEntries: z.number().int().min(0).default(2000),
    languageServerIdleMs: z.number().int().min(0).default(300000),
    performanceMetricsEnabled: z.boolean().default(false),
    mockLlmEnabled: z.boolean().default(false),
    developerMode: z.boolean().default(false),
    maxIndexFiles: z.number().int().min(0).default(20000)
  })
});
