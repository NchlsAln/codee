"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferRTypes = exports.rAstPatterns = exports.rIdioms = exports.rEcosystem = exports.rRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.rDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
const runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "rRuntime", { enumerable: true, get: function () { return runtime_1.rRuntime; } });
const ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "rEcosystem", { enumerable: true, get: function () { return ecosystem_1.rEcosystem; } });
const idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "rIdioms", { enumerable: true, get: function () { return idioms_1.rIdioms; } });
const ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "rAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.rAstPatterns; } });
const type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferRTypes", { enumerable: true, get: function () { return type_inference_1.inferRTypes; } });
exports.rDefinition = {
    id: "r",
    name: "R",
    extensions: [
        ".r",
        ".R",
        ".Rmd"
    ],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
