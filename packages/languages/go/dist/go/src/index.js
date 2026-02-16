"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ginTemplate = exports.gorillaTemplate = exports.stdlibTemplate = exports.cliTemplate = exports.inferGoTypes = exports.goAstPatterns = exports.goIdioms = exports.goEcosystem = exports.goRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.goDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
exports.goDefinition = {
    id: "go",
    name: "Go",
    extensions: [".go"],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "goRuntime", { enumerable: true, get: function () { return runtime_1.goRuntime; } });
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "goEcosystem", { enumerable: true, get: function () { return ecosystem_1.goEcosystem; } });
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "goIdioms", { enumerable: true, get: function () { return idioms_1.goIdioms; } });
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "goAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.goAstPatterns; } });
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferGoTypes", { enumerable: true, get: function () { return type_inference_1.inferGoTypes; } });
var cli_1 = require("./templates/cli");
Object.defineProperty(exports, "cliTemplate", { enumerable: true, get: function () { return cli_1.cliTemplate; } });
var stdlib_1 = require("./templates/stdlib");
Object.defineProperty(exports, "stdlibTemplate", { enumerable: true, get: function () { return stdlib_1.stdlibTemplate; } });
var gorilla_1 = require("./templates/gorilla");
Object.defineProperty(exports, "gorillaTemplate", { enumerable: true, get: function () { return gorilla_1.gorillaTemplate; } });
var gin_1 = require("./templates/gin");
Object.defineProperty(exports, "ginTemplate", { enumerable: true, get: function () { return gin_1.ginTemplate; } });
