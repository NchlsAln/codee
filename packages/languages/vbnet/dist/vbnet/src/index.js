"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferVbnetTypes = exports.vbnetAstPatterns = exports.vbnetIdioms = exports.vbnetEcosystem = exports.vbnetRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.vbnetDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
const runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "vbnetRuntime", { enumerable: true, get: function () { return runtime_1.vbnetRuntime; } });
const ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "vbnetEcosystem", { enumerable: true, get: function () { return ecosystem_1.vbnetEcosystem; } });
const idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "vbnetIdioms", { enumerable: true, get: function () { return idioms_1.vbnetIdioms; } });
const ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "vbnetAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.vbnetAstPatterns; } });
const type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferVbnetTypes", { enumerable: true, get: function () { return type_inference_1.inferVbnetTypes; } });
exports.vbnetDefinition = {
    id: "vbnet",
    name: "Vbnet",
    extensions: [
        ".ext"
    ],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
