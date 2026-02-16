"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestjsTemplate = exports.nextjsTemplate = exports.reactTemplate = exports.inferTypeScriptTypes = exports.typescriptAstPatterns = exports.typescriptIdioms = exports.typescriptEcosystem = exports.typescriptRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.typescriptDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
exports.typescriptDefinition = {
    id: "typescript",
    name: "TypeScript",
    extensions: [".ts", ".tsx"],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "typescriptRuntime", { enumerable: true, get: function () { return runtime_1.typescriptRuntime; } });
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "typescriptEcosystem", { enumerable: true, get: function () { return ecosystem_1.typescriptEcosystem; } });
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "typescriptIdioms", { enumerable: true, get: function () { return idioms_1.typescriptIdioms; } });
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "typescriptAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.typescriptAstPatterns; } });
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferTypeScriptTypes", { enumerable: true, get: function () { return type_inference_1.inferTypeScriptTypes; } });
var react_1 = require("./templates/react");
Object.defineProperty(exports, "reactTemplate", { enumerable: true, get: function () { return react_1.reactTemplate; } });
var nextjs_1 = require("./templates/nextjs");
Object.defineProperty(exports, "nextjsTemplate", { enumerable: true, get: function () { return nextjs_1.nextjsTemplate; } });
var nestjs_1 = require("./templates/nestjs");
Object.defineProperty(exports, "nestjsTemplate", { enumerable: true, get: function () { return nestjs_1.nestjsTemplate; } });
