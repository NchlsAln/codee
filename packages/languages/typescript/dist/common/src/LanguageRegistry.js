"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageRegistry = void 0;
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
