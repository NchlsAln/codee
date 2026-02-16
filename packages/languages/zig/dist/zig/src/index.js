"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferZigTypes = exports.zigAstPatterns = exports.zigIdioms = exports.zigEcosystem = exports.zigRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.zigDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
const runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "zigRuntime", { enumerable: true, get: function () { return runtime_1.zigRuntime; } });
const ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "zigEcosystem", { enumerable: true, get: function () { return ecosystem_1.zigEcosystem; } });
const idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "zigIdioms", { enumerable: true, get: function () { return idioms_1.zigIdioms; } });
const ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "zigAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.zigAstPatterns; } });
const type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferZigTypes", { enumerable: true, get: function () { return type_inference_1.inferZigTypes; } });
exports.zigDefinition = {
    id: "zig",
    name: "Zig",
    extensions: [
        ".zig"
    ],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
