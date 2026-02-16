"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeRegistry = void 0;
const index_1 = require("../../index");
const TYPE_PATTERNS = [
    { kind: "class", regex: /\bclass\s+(?<name>\w+)/g },
    { kind: "interface", regex: /\binterface\s+(?<name>\w+)/g },
    { kind: "enum", regex: /\benum\s+(?<name>\w+)/g },
    { kind: "struct", regex: /\bstruct\s+(?<name>\w+)/g }
];
const ALIAS_PATTERNS = [
    /\btype\s+(?<name>\w+)\s*=/g,
    /\busing\s+(?<name>\w+)\s*=/g,
    /\btypedef\s+[^;]+\s+(?<name>\w+)\s*;/g
];
class TypeRegistry {
    types = new Map();
    definitions = new Map();
    registerType(name, definition, sourceLang) {
        if (this.types.has(name)) {
            return;
        }
        this.types.set(name, {
            name,
            sourceLanguage: sourceLang,
            definition,
            targetDefinitions: new Map()
        });
    }
    getTypeDefinition(name, targetLang) {
        const entry = this.types.get(name);
        if (!entry) {
            return undefined;
        }
        const cached = entry.targetDefinitions.get(targetLang);
        if (cached) {
            return cached;
        }
        const sourceSnippet = entry.definition.value;
        if (!sourceSnippet) {
            return undefined;
        }
        const translation = (0, index_1.translateCode)(entry.sourceLanguage, targetLang, sourceSnippet);
        const output = translation.output;
        entry.targetDefinitions.set(targetLang, output);
        return output;
    }
    generateTypeDefinitions(targetLang) {
        const outputs = [];
        for (const type of this.types.values()) {
            const output = this.getTypeDefinition(type.name, targetLang);
            if (output) {
                outputs.push(output);
            }
        }
        return outputs.join("\n\n");
    }
    registerFromSource(source, language, filePath) {
        const found = [];
        for (const pattern of TYPE_PATTERNS) {
            let match;
            while ((match = pattern.regex.exec(source)) !== null) {
                const name = match.groups?.name?.trim();
                if (!name) {
                    continue;
                }
                this.registerType(name, { type: pattern.kind, name, value: this.extractLine(source, match.index ?? 0) }, language);
                const definition = {
                    name,
                    kind: pattern.kind,
                    language,
                    sourceFile: filePath
                };
                if (!this.definitions.has(name)) {
                    this.definitions.set(name, definition);
                }
                found.push(definition);
            }
        }
        for (const pattern of ALIAS_PATTERNS) {
            let match;
            while ((match = pattern.exec(source)) !== null) {
                const name = match.groups?.name?.trim();
                if (!name) {
                    continue;
                }
                this.registerType(name, { type: "type-alias", name, value: this.extractLine(source, match.index ?? 0) }, language);
            }
        }
        return found;
    }
    findDuplicates(definitions, filePath) {
        return definitions
            .map((definition) => definition.name)
            .filter((name) => {
            const existing = this.definitions.get(name);
            return existing ? existing.sourceFile !== filePath : false;
        });
    }
    has(name) {
        return this.definitions.has(name);
    }
    get(name) {
        return this.definitions.get(name);
    }
    list() {
        return Array.from(this.definitions.values());
    }
    extractLine(source, index) {
        const start = source.lastIndexOf("\n", index - 1) + 1;
        const end = source.indexOf("\n", index);
        if (end === -1) {
            return source.slice(start).trim();
        }
        return source.slice(start, end).trim();
    }
}
exports.TypeRegistry = TypeRegistry;
