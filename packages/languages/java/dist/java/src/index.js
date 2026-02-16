"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.androidTemplate = exports.jpaTemplate = exports.repositoriesTemplate = exports.servicesTemplate = exports.controllersTemplate = exports.ioTemplate = exports.collectionsTemplate = exports.inferJavaTypes = exports.javaAstPatterns = exports.javaIdioms = exports.javaEcosystem = exports.javaRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.javaDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
exports.javaDefinition = {
    id: "java",
    name: "Java",
    extensions: [".java"],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "javaRuntime", { enumerable: true, get: function () { return runtime_1.javaRuntime; } });
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "javaEcosystem", { enumerable: true, get: function () { return ecosystem_1.javaEcosystem; } });
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "javaIdioms", { enumerable: true, get: function () { return idioms_1.javaIdioms; } });
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "javaAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.javaAstPatterns; } });
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferJavaTypes", { enumerable: true, get: function () { return type_inference_1.inferJavaTypes; } });
var stdlib_1 = require("./templates/stdlib");
Object.defineProperty(exports, "collectionsTemplate", { enumerable: true, get: function () { return stdlib_1.collectionsTemplate; } });
Object.defineProperty(exports, "ioTemplate", { enumerable: true, get: function () { return stdlib_1.ioTemplate; } });
var spring_1 = require("./templates/spring");
Object.defineProperty(exports, "controllersTemplate", { enumerable: true, get: function () { return spring_1.controllersTemplate; } });
Object.defineProperty(exports, "servicesTemplate", { enumerable: true, get: function () { return spring_1.servicesTemplate; } });
Object.defineProperty(exports, "repositoriesTemplate", { enumerable: true, get: function () { return spring_1.repositoriesTemplate; } });
var jpa_1 = require("./templates/jpa");
Object.defineProperty(exports, "jpaTemplate", { enumerable: true, get: function () { return jpa_1.jpaTemplate; } });
var android_1 = require("./templates/android");
Object.defineProperty(exports, "androidTemplate", { enumerable: true, get: function () { return android_1.androidTemplate; } });
