"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliTemplate = exports.axumTemplate = exports.inferRustTypes = exports.rustAstPatterns = exports.rustIdioms = exports.rustEcosystem = exports.rustRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.rustDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
exports.rustDefinition = {
    id: "rust",
    name: "Rust",
    extensions: [".rs"],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "rustRuntime", { enumerable: true, get: function () { return runtime_1.rustRuntime; } });
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "rustEcosystem", { enumerable: true, get: function () { return ecosystem_1.rustEcosystem; } });
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "rustIdioms", { enumerable: true, get: function () { return idioms_1.rustIdioms; } });
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "rustAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.rustAstPatterns; } });
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferRustTypes", { enumerable: true, get: function () { return type_inference_1.inferRustTypes; } });
var axum_1 = require("./templates/axum");
Object.defineProperty(exports, "axumTemplate", { enumerable: true, get: function () { return axum_1.axumTemplate; } });
var cli_1 = require("./templates/cli");
Object.defineProperty(exports, "cliTemplate", { enumerable: true, get: function () { return cli_1.cliTemplate; } });
