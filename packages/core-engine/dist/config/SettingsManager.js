"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsManager = void 0;
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const defaults_1 = require("./defaults");
const schema_1 = require("./schema");
const migrations_1 = require("./migrations");
class SettingsManager {
    projectPath;
    runtimeOverrides;
    projectWatcher;
    userWatcher;
    constructor(options) {
        this.projectPath = options.projectPath;
        this.runtimeOverrides = options.runtimeOverrides ?? {};
    }
    async resolve() {
        const userConfig = await this.loadUserProfile();
        const projectConfig = await this.loadProjectConfig();
        const merged = this.mergeConfigs(defaults_1.DEFAULT_CONFIG, userConfig, projectConfig, this.runtimeOverrides);
        const parsed = schema_1.CodeeConfigSchema.parse(merged);
        return (0, migrations_1.migrateConfig)(parsed);
    }
    setRuntimeOverrides(overrides) {
        this.runtimeOverrides = overrides;
    }
    async saveProjectConfig(config) {
        if (!this.projectPath) {
            return;
        }
        const configPath = path_1.default.join(this.projectPath, ".codee", "config.json");
        await (0, promises_1.mkdir)(path_1.default.dirname(configPath), { recursive: true });
        await (0, promises_1.writeFile)(configPath, JSON.stringify(config, null, 2), "utf-8");
        await this.audit({
            timestamp: Date.now(),
            source: "project",
            path: configPath,
            summary: "Project config updated"
        });
    }
    async saveUserProfile(config) {
        const profilePath = this.getUserProfilePath();
        await (0, promises_1.mkdir)(path_1.default.dirname(profilePath), { recursive: true });
        await (0, promises_1.writeFile)(profilePath, JSON.stringify(config, null, 2), "utf-8");
        await this.audit({
            timestamp: Date.now(),
            source: "user",
            path: profilePath,
            summary: "User profile updated"
        });
    }
    watch(onChange) {
        if (process.env.CODEE_DISABLE_WATCH === "1" || process.env.NODE_ENV === "test") {
            return;
        }
        const projectConfig = this.projectPath
            ? path_1.default.join(this.projectPath, ".codee", "config.json")
            : undefined;
        const userProfile = this.getUserProfilePath();
        if (projectConfig && (0, fs_1.existsSync)(projectConfig)) {
            this.projectWatcher = (0, fs_1.watch)(projectConfig, () => onChange());
        }
        if ((0, fs_1.existsSync)(userProfile)) {
            this.userWatcher = (0, fs_1.watch)(userProfile, () => onChange());
        }
    }
    dispose() {
        this.projectWatcher?.close();
        this.userWatcher?.close();
    }
    async loadProjectConfig() {
        if (!this.projectPath) {
            return {};
        }
        const configPath = path_1.default.join(this.projectPath, ".codee", "config.json");
        return this.readConfig(configPath);
    }
    async loadUserProfile() {
        const profilePath = this.getUserProfilePath();
        return this.readConfig(profilePath);
    }
    async readConfig(filePath) {
        try {
            const raw = await (0, promises_1.readFile)(filePath, "utf-8");
            const parsed = JSON.parse(raw);
            return parsed;
        }
        catch (error) {
            return {};
        }
    }
    getUserProfilePath() {
        return path_1.default.join(os_1.default.homedir(), "codee", "profile.json");
    }
    mergeConfigs(base, user, project, runtime) {
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
    async audit(entry) {
        const logPath = this.projectPath
            ? path_1.default.join(this.projectPath, ".codee", "audit.log")
            : path_1.default.join(os_1.default.homedir(), "codee", "audit.log");
        const line = `${new Date(entry.timestamp).toISOString()}|${entry.source}|${entry.path}|${entry.summary}\n`;
        await (0, promises_1.mkdir)(path_1.default.dirname(logPath), { recursive: true });
        await (0, promises_1.appendFile)(logPath, line, "utf-8");
    }
}
exports.SettingsManager = SettingsManager;
