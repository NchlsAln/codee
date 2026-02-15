"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = void 0;
exports.DEFAULT_CONFIG = {
    version: 1,
    core: {
        modelId: "local-default",
        chatModelId: "",
        codeModelId: "",
        embeddingModelId: "",
        modelPath: "",
        cloudFallback: false,
        modelEndpoint: "",
        pinnedCertificates: {}
    },
    features: {
        autoComplete: true,
        inlineSuggestions: true,
        codeLens: false,
        readOnlyMode: false
    },
    languages: {
        enabled: ["typescript", "javascript", "python"],
        lspPaths: {}
    },
    privacy: {
        telemetryEnabled: false,
        telemetryEndpoint: "",
        telemetryProjectKey: "",
        crashReportingEnabled: false,
        crashReportingDsn: "",
        loggingEnabled: false,
        dataRetentionDays: 30,
        offlineMode: false
    },
    advanced: {
        contextWindowTokens: 6000,
        temperature: 0.2,
        systemPrompts: {},
        includePatterns: ["**/*"],
        excludePatterns: ["**/node_modules/**", "**/dist/**", "**/.git/**"],
        customInstructions: "",
        teamPrompts: [],
        themePreference: "vscode",
        indexingIdleDelayMs: 1500,
        embeddingCacheMaxEntries: 2000,
        languageServerIdleMs: 300000,
        performanceMetricsEnabled: false,
        mockLlmEnabled: false,
        developerMode: false,
        maxIndexFiles: 20000
    }
};
