"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferPerlTypes = exports.perlAstPatterns = exports.perlIdioms = exports.perlEcosystem = exports.perlRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.perlDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
const runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "perlRuntime", { enumerable: true, get: function () { return runtime_1.perlRuntime; } });
const ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "perlEcosystem", { enumerable: true, get: function () { return ecosystem_1.perlEcosystem; } });
const idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "perlIdioms", { enumerable: true, get: function () { return idioms_1.perlIdioms; } });
const ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "perlAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.perlAstPatterns; } });
const type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferPerlTypes", { enumerable: true, get: function () { return type_inference_1.inferPerlTypes; } });
exports.perlDefinition = {
    id: "perl",
    name: "Perl",
    extensions: [
        ".ext"
    ],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
