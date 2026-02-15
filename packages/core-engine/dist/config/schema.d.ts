import { z } from "zod";
export declare const CoreSettingsSchema: z.ZodObject<{
    modelId: z.ZodString;
    chatModelId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    codeModelId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    embeddingModelId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    modelPath: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    cloudFallback: z.ZodBoolean;
    modelEndpoint: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    pinnedCertificates: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    modelId: string;
    chatModelId: string;
    codeModelId: string;
    embeddingModelId: string;
    modelPath: string;
    cloudFallback: boolean;
    modelEndpoint: string;
    pinnedCertificates: Record<string, string[]>;
}, {
    modelId: string;
    cloudFallback: boolean;
    chatModelId?: string | undefined;
    codeModelId?: string | undefined;
    embeddingModelId?: string | undefined;
    modelPath?: string | undefined;
    modelEndpoint?: string | undefined;
    pinnedCertificates?: Record<string, string[]> | undefined;
}>;
export declare const FeatureSettingsSchema: z.ZodObject<{
    autoComplete: z.ZodBoolean;
    inlineSuggestions: z.ZodBoolean;
    codeLens: z.ZodBoolean;
    readOnlyMode: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    autoComplete: boolean;
    inlineSuggestions: boolean;
    codeLens: boolean;
    readOnlyMode: boolean;
}, {
    autoComplete: boolean;
    inlineSuggestions: boolean;
    codeLens: boolean;
    readOnlyMode?: boolean | undefined;
}>;
export declare const LanguageSettingsSchema: z.ZodObject<{
    enabled: z.ZodArray<z.ZodString, "many">;
    lspPaths: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    enabled: string[];
    lspPaths: Record<string, string>;
}, {
    enabled: string[];
    lspPaths: Record<string, string>;
}>;
export declare const PrivacySettingsSchema: z.ZodObject<{
    telemetryEnabled: z.ZodBoolean;
    telemetryEndpoint: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    telemetryProjectKey: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    crashReportingEnabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    crashReportingDsn: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    loggingEnabled: z.ZodBoolean;
    dataRetentionDays: z.ZodNumber;
    offlineMode: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    telemetryEnabled: boolean;
    telemetryEndpoint: string;
    telemetryProjectKey: string;
    crashReportingEnabled: boolean;
    crashReportingDsn: string;
    loggingEnabled: boolean;
    dataRetentionDays: number;
    offlineMode: boolean;
}, {
    telemetryEnabled: boolean;
    loggingEnabled: boolean;
    dataRetentionDays: number;
    telemetryEndpoint?: string | undefined;
    telemetryProjectKey?: string | undefined;
    crashReportingEnabled?: boolean | undefined;
    crashReportingDsn?: string | undefined;
    offlineMode?: boolean | undefined;
}>;
export declare const AdvancedSettingsSchema: z.ZodObject<{
    contextWindowTokens: z.ZodNumber;
    temperature: z.ZodNumber;
    systemPrompts: z.ZodRecord<z.ZodString, z.ZodString>;
    includePatterns: z.ZodArray<z.ZodString, "many">;
    excludePatterns: z.ZodArray<z.ZodString, "many">;
    customInstructions: z.ZodString;
    teamPrompts: z.ZodArray<z.ZodString, "many">;
    themePreference: z.ZodEnum<["vscode", "light", "dark", "high-contrast"]>;
    indexingIdleDelayMs: z.ZodDefault<z.ZodNumber>;
    embeddingCacheMaxEntries: z.ZodDefault<z.ZodNumber>;
    languageServerIdleMs: z.ZodDefault<z.ZodNumber>;
    performanceMetricsEnabled: z.ZodDefault<z.ZodBoolean>;
    mockLlmEnabled: z.ZodDefault<z.ZodBoolean>;
    developerMode: z.ZodDefault<z.ZodBoolean>;
    maxIndexFiles: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    contextWindowTokens: number;
    temperature: number;
    systemPrompts: Record<string, string>;
    includePatterns: string[];
    excludePatterns: string[];
    customInstructions: string;
    teamPrompts: string[];
    themePreference: "vscode" | "light" | "dark" | "high-contrast";
    indexingIdleDelayMs: number;
    embeddingCacheMaxEntries: number;
    languageServerIdleMs: number;
    performanceMetricsEnabled: boolean;
    mockLlmEnabled: boolean;
    developerMode: boolean;
    maxIndexFiles: number;
}, {
    contextWindowTokens: number;
    temperature: number;
    systemPrompts: Record<string, string>;
    includePatterns: string[];
    excludePatterns: string[];
    customInstructions: string;
    teamPrompts: string[];
    themePreference: "vscode" | "light" | "dark" | "high-contrast";
    indexingIdleDelayMs?: number | undefined;
    embeddingCacheMaxEntries?: number | undefined;
    languageServerIdleMs?: number | undefined;
    performanceMetricsEnabled?: boolean | undefined;
    mockLlmEnabled?: boolean | undefined;
    developerMode?: boolean | undefined;
    maxIndexFiles?: number | undefined;
}>;
export declare const CodeeConfigSchema: z.ZodObject<{
    version: z.ZodNumber;
    core: z.ZodObject<{
        modelId: z.ZodString;
        chatModelId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        codeModelId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        embeddingModelId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        modelPath: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        cloudFallback: z.ZodBoolean;
        modelEndpoint: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        pinnedCertificates: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        modelId: string;
        chatModelId: string;
        codeModelId: string;
        embeddingModelId: string;
        modelPath: string;
        cloudFallback: boolean;
        modelEndpoint: string;
        pinnedCertificates: Record<string, string[]>;
    }, {
        modelId: string;
        cloudFallback: boolean;
        chatModelId?: string | undefined;
        codeModelId?: string | undefined;
        embeddingModelId?: string | undefined;
        modelPath?: string | undefined;
        modelEndpoint?: string | undefined;
        pinnedCertificates?: Record<string, string[]> | undefined;
    }>;
    features: z.ZodObject<{
        autoComplete: z.ZodBoolean;
        inlineSuggestions: z.ZodBoolean;
        codeLens: z.ZodBoolean;
        readOnlyMode: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        autoComplete: boolean;
        inlineSuggestions: boolean;
        codeLens: boolean;
        readOnlyMode: boolean;
    }, {
        autoComplete: boolean;
        inlineSuggestions: boolean;
        codeLens: boolean;
        readOnlyMode?: boolean | undefined;
    }>;
    languages: z.ZodObject<{
        enabled: z.ZodArray<z.ZodString, "many">;
        lspPaths: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enabled: string[];
        lspPaths: Record<string, string>;
    }, {
        enabled: string[];
        lspPaths: Record<string, string>;
    }>;
    privacy: z.ZodObject<{
        telemetryEnabled: z.ZodBoolean;
        telemetryEndpoint: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        telemetryProjectKey: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        crashReportingEnabled: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        crashReportingDsn: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        loggingEnabled: z.ZodBoolean;
        dataRetentionDays: z.ZodNumber;
        offlineMode: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        telemetryEnabled: boolean;
        telemetryEndpoint: string;
        telemetryProjectKey: string;
        crashReportingEnabled: boolean;
        crashReportingDsn: string;
        loggingEnabled: boolean;
        dataRetentionDays: number;
        offlineMode: boolean;
    }, {
        telemetryEnabled: boolean;
        loggingEnabled: boolean;
        dataRetentionDays: number;
        telemetryEndpoint?: string | undefined;
        telemetryProjectKey?: string | undefined;
        crashReportingEnabled?: boolean | undefined;
        crashReportingDsn?: string | undefined;
        offlineMode?: boolean | undefined;
    }>;
    advanced: z.ZodObject<{
        contextWindowTokens: z.ZodNumber;
        temperature: z.ZodNumber;
        systemPrompts: z.ZodRecord<z.ZodString, z.ZodString>;
        includePatterns: z.ZodArray<z.ZodString, "many">;
        excludePatterns: z.ZodArray<z.ZodString, "many">;
        customInstructions: z.ZodString;
        teamPrompts: z.ZodArray<z.ZodString, "many">;
        themePreference: z.ZodEnum<["vscode", "light", "dark", "high-contrast"]>;
        indexingIdleDelayMs: z.ZodDefault<z.ZodNumber>;
        embeddingCacheMaxEntries: z.ZodDefault<z.ZodNumber>;
        languageServerIdleMs: z.ZodDefault<z.ZodNumber>;
        performanceMetricsEnabled: z.ZodDefault<z.ZodBoolean>;
        mockLlmEnabled: z.ZodDefault<z.ZodBoolean>;
        developerMode: z.ZodDefault<z.ZodBoolean>;
        maxIndexFiles: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        contextWindowTokens: number;
        temperature: number;
        systemPrompts: Record<string, string>;
        includePatterns: string[];
        excludePatterns: string[];
        customInstructions: string;
        teamPrompts: string[];
        themePreference: "vscode" | "light" | "dark" | "high-contrast";
        indexingIdleDelayMs: number;
        embeddingCacheMaxEntries: number;
        languageServerIdleMs: number;
        performanceMetricsEnabled: boolean;
        mockLlmEnabled: boolean;
        developerMode: boolean;
        maxIndexFiles: number;
    }, {
        contextWindowTokens: number;
        temperature: number;
        systemPrompts: Record<string, string>;
        includePatterns: string[];
        excludePatterns: string[];
        customInstructions: string;
        teamPrompts: string[];
        themePreference: "vscode" | "light" | "dark" | "high-contrast";
        indexingIdleDelayMs?: number | undefined;
        embeddingCacheMaxEntries?: number | undefined;
        languageServerIdleMs?: number | undefined;
        performanceMetricsEnabled?: boolean | undefined;
        mockLlmEnabled?: boolean | undefined;
        developerMode?: boolean | undefined;
        maxIndexFiles?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    version: number;
    core: {
        modelId: string;
        chatModelId: string;
        codeModelId: string;
        embeddingModelId: string;
        modelPath: string;
        cloudFallback: boolean;
        modelEndpoint: string;
        pinnedCertificates: Record<string, string[]>;
    };
    features: {
        autoComplete: boolean;
        inlineSuggestions: boolean;
        codeLens: boolean;
        readOnlyMode: boolean;
    };
    languages: {
        enabled: string[];
        lspPaths: Record<string, string>;
    };
    privacy: {
        telemetryEnabled: boolean;
        telemetryEndpoint: string;
        telemetryProjectKey: string;
        crashReportingEnabled: boolean;
        crashReportingDsn: string;
        loggingEnabled: boolean;
        dataRetentionDays: number;
        offlineMode: boolean;
    };
    advanced: {
        contextWindowTokens: number;
        temperature: number;
        systemPrompts: Record<string, string>;
        includePatterns: string[];
        excludePatterns: string[];
        customInstructions: string;
        teamPrompts: string[];
        themePreference: "vscode" | "light" | "dark" | "high-contrast";
        indexingIdleDelayMs: number;
        embeddingCacheMaxEntries: number;
        languageServerIdleMs: number;
        performanceMetricsEnabled: boolean;
        mockLlmEnabled: boolean;
        developerMode: boolean;
        maxIndexFiles: number;
    };
}, {
    version: number;
    core: {
        modelId: string;
        cloudFallback: boolean;
        chatModelId?: string | undefined;
        codeModelId?: string | undefined;
        embeddingModelId?: string | undefined;
        modelPath?: string | undefined;
        modelEndpoint?: string | undefined;
        pinnedCertificates?: Record<string, string[]> | undefined;
    };
    features: {
        autoComplete: boolean;
        inlineSuggestions: boolean;
        codeLens: boolean;
        readOnlyMode?: boolean | undefined;
    };
    languages: {
        enabled: string[];
        lspPaths: Record<string, string>;
    };
    privacy: {
        telemetryEnabled: boolean;
        loggingEnabled: boolean;
        dataRetentionDays: number;
        telemetryEndpoint?: string | undefined;
        telemetryProjectKey?: string | undefined;
        crashReportingEnabled?: boolean | undefined;
        crashReportingDsn?: string | undefined;
        offlineMode?: boolean | undefined;
    };
    advanced: {
        contextWindowTokens: number;
        temperature: number;
        systemPrompts: Record<string, string>;
        includePatterns: string[];
        excludePatterns: string[];
        customInstructions: string;
        teamPrompts: string[];
        themePreference: "vscode" | "light" | "dark" | "high-contrast";
        indexingIdleDelayMs?: number | undefined;
        embeddingCacheMaxEntries?: number | undefined;
        languageServerIdleMs?: number | undefined;
        performanceMetricsEnabled?: boolean | undefined;
        mockLlmEnabled?: boolean | undefined;
        developerMode?: boolean | undefined;
        maxIndexFiles?: number | undefined;
    };
}>;
