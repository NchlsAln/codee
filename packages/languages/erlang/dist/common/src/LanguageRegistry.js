"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_LANGUAGES = exports.LanguageRegistry = void 0;
exports.registerAllLanguages = registerAllLanguages;
const all_languages_1 = require("./all-languages");
class LanguageRegistry {
    languages = new Map();
    activeServers = new Map();
    registerLanguage(definition) {
        this.languages.set(definition.id, definition);
    }
    getLanguage(id) {
        return this.languages.get(id);
    }
    getLanguages() {
        return Array.from(this.languages.values());
    }
    detectLanguage(filePath) {
        const lower = filePath.toLowerCase();
        return this.getLanguages().find((language) => language.extensions.some((ext) => lower.endsWith(ext)));
    }
    getOrStartServer(projectPath, languageId) {
        const definition = this.languages.get(languageId);
        if (!definition) {
            return undefined;
        }
        const key = projectPath || "<global>";
        const serverMap = this.activeServers.get(key) ?? new Map();
        if (!this.activeServers.has(key)) {
            this.activeServers.set(key, serverMap);
        }
        const existing = serverMap.get(languageId);
        if (existing) {
            return existing;
        }
        const server = definition.serverFactory(projectPath);
        void server.start();
        serverMap.set(languageId, server);
        return server;
    }
    async stopServer(projectPath, languageId) {
        const key = projectPath || "<global>";
        const serverMap = this.activeServers.get(key);
        const server = serverMap?.get(languageId);
        if (!server) {
            return;
        }
        await server.stop();
        serverMap?.delete(languageId);
    }
    listActiveServers(projectPath) {
        const key = projectPath || "<global>";
        return Array.from(this.activeServers.get(key)?.values() ?? []);
    }
}
exports.LanguageRegistry = LanguageRegistry;
const toCamelCase = (value) => {
    const parts = value.split(/[\s_-]+/).filter(Boolean);
    if (parts.length === 0) {
        return "";
    }
    const first = parts[0] ?? "";
    const rest = parts.slice(1);
    return `${first.toLowerCase()}${rest.map((part) => `${part[0]?.toUpperCase() || ""}${part.slice(1)}`).join("")}`;
};
var all_languages_2 = require("./all-languages");
Object.defineProperty(exports, "ALL_LANGUAGES", { enumerable: true, get: function () { return all_languages_2.ALL_LANGUAGES; } });
function registerAllLanguages(registry) {
    all_languages_1.ALL_LANGUAGES.forEach((lang) => {
        const moduleName = `@codee/lang-${lang}`;
        try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const module = require(moduleName);
            const definitionKey = `${toCamelCase(lang)}Definition`;
            const definition = module[definitionKey] ?? module.default;
            if (!definition) {
                return;
            }
            registry.registerLanguage(definition);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            if (message.includes(moduleName)) {
                return;
            }
            throw error;
        }
    });
}
