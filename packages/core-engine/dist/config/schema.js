"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeeConfigSchema = exports.AdvancedSettingsSchema = exports.PrivacySettingsSchema = exports.LanguageSettingsSchema = exports.FeatureSettingsSchema = exports.CoreSettingsSchema = void 0;
const zod_1 = require("zod");
exports.CoreSettingsSchema = zod_1.z.object({
    modelId: zod_1.z.string(),
    chatModelId: zod_1.z.string().optional().default(""),
    codeModelId: zod_1.z.string().optional().default(""),
    embeddingModelId: zod_1.z.string().optional().default(""),
    modelPath: zod_1.z.string().optional().default(""),
    cloudFallback: zod_1.z.boolean(),
    modelEndpoint: zod_1.z.string().optional().default(""),
    pinnedCertificates: zod_1.z.record(zod_1.z.array(zod_1.z.string())).default({})
});
exports.FeatureSettingsSchema = zod_1.z.object({
    autoComplete: zod_1.z.boolean(),
    inlineSuggestions: zod_1.z.boolean(),
    codeLens: zod_1.z.boolean(),
    readOnlyMode: zod_1.z.boolean().default(false)
});
exports.LanguageSettingsSchema = zod_1.z.object({
    enabled: zod_1.z.array(zod_1.z.string()),
    lspPaths: zod_1.z.record(zod_1.z.string())
});
exports.PrivacySettingsSchema = zod_1.z.object({
    telemetryEnabled: zod_1.z.boolean(),
    telemetryEndpoint: zod_1.z.string().optional().default(""),
    telemetryProjectKey: zod_1.z.string().optional().default(""),
    crashReportingEnabled: zod_1.z.boolean().optional().default(false),
    crashReportingDsn: zod_1.z.string().optional().default(""),
    loggingEnabled: zod_1.z.boolean(),
    dataRetentionDays: zod_1.z.number().int().min(0),
    offlineMode: zod_1.z.boolean().default(false)
});
exports.AdvancedSettingsSchema = zod_1.z.object({
    contextWindowTokens: zod_1.z.number().int().min(512),
    temperature: zod_1.z.number().min(0).max(1),
    systemPrompts: zod_1.z.record(zod_1.z.string()),
    includePatterns: zod_1.z.array(zod_1.z.string()),
    excludePatterns: zod_1.z.array(zod_1.z.string()),
    customInstructions: zod_1.z.string(),
    teamPrompts: zod_1.z.array(zod_1.z.string()),
    themePreference: zod_1.z.enum(["vscode", "light", "dark", "high-contrast"]),
    indexingIdleDelayMs: zod_1.z.number().int().min(0).default(1500),
    embeddingCacheMaxEntries: zod_1.z.number().int().min(0).default(2000),
    languageServerIdleMs: zod_1.z.number().int().min(0).default(300000),
    performanceMetricsEnabled: zod_1.z.boolean().default(false),
    mockLlmEnabled: zod_1.z.boolean().default(false),
    developerMode: zod_1.z.boolean().default(false),
    maxIndexFiles: zod_1.z.number().int().min(0).default(20000)
});
exports.CodeeConfigSchema = zod_1.z.object({
    version: zod_1.z.number().int().min(1),
    core: exports.CoreSettingsSchema,
    features: exports.FeatureSettingsSchema,
    languages: exports.LanguageSettingsSchema,
    privacy: exports.PrivacySettingsSchema,
    advanced: exports.AdvancedSettingsSchema
});
