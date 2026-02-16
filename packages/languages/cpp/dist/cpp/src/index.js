"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddedTemplate = exports.qtTemplate = exports.boostTemplate = exports.coroutinesTemplate = exports.conceptsTemplate = exports.rangesTemplate = exports.concurrencyTemplate = exports.smartPointersTemplate = exports.containersTemplate = exports.inferCppTypes = exports.cppAstPatterns = exports.cppIdioms = exports.cppEcosystem = exports.cppRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.cppDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
exports.cppDefinition = {
    id: "cpp",
    name: "C++",
    extensions: [".cpp", ".cc", ".cxx", ".hpp", ".h"],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "cppRuntime", { enumerable: true, get: function () { return runtime_1.cppRuntime; } });
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "cppEcosystem", { enumerable: true, get: function () { return ecosystem_1.cppEcosystem; } });
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "cppIdioms", { enumerable: true, get: function () { return idioms_1.cppIdioms; } });
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "cppAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.cppAstPatterns; } });
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferCppTypes", { enumerable: true, get: function () { return type_inference_1.inferCppTypes; } });
var stdlib_1 = require("./templates/stdlib");
Object.defineProperty(exports, "containersTemplate", { enumerable: true, get: function () { return stdlib_1.containersTemplate; } });
Object.defineProperty(exports, "smartPointersTemplate", { enumerable: true, get: function () { return stdlib_1.smartPointersTemplate; } });
Object.defineProperty(exports, "concurrencyTemplate", { enumerable: true, get: function () { return stdlib_1.concurrencyTemplate; } });
var modern_cpp_1 = require("./templates/modern-cpp");
Object.defineProperty(exports, "rangesTemplate", { enumerable: true, get: function () { return modern_cpp_1.rangesTemplate; } });
Object.defineProperty(exports, "conceptsTemplate", { enumerable: true, get: function () { return modern_cpp_1.conceptsTemplate; } });
Object.defineProperty(exports, "coroutinesTemplate", { enumerable: true, get: function () { return modern_cpp_1.coroutinesTemplate; } });
var boost_1 = require("./templates/boost");
Object.defineProperty(exports, "boostTemplate", { enumerable: true, get: function () { return boost_1.boostTemplate; } });
var qt_1 = require("./templates/qt");
Object.defineProperty(exports, "qtTemplate", { enumerable: true, get: function () { return qt_1.qtTemplate; } });
var embedded_1 = require("./templates/embedded");
Object.defineProperty(exports, "embeddedTemplate", { enumerable: true, get: function () { return embedded_1.embeddedTemplate; } });
