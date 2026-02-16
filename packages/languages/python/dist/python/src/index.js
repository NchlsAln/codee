"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pytorchTemplate = exports.fastApiTemplate = exports.djangoTemplate = exports.inferPythonTypes = exports.pythonAstPatterns = exports.pythonIdioms = exports.pythonEcosystem = exports.pythonRuntime = exports.PromptEngineering = exports.CodeTemplates = exports.LanguageServer = exports.LanguageAnalyzer = exports.pythonDefinition = void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", { enumerable: true, get: function () { return LanguageAnalyzer_1.LanguageAnalyzer; } });
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", { enumerable: true, get: function () { return LanguageServer_1.LanguageServer; } });
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", { enumerable: true, get: function () { return CodeTemplates_1.CodeTemplates; } });
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", { enumerable: true, get: function () { return PromptEngineering_1.PromptEngineering; } });
exports.pythonDefinition = {
    id: "python",
    name: "Python",
    extensions: [".py"],
    serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
    analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
    templates: new CodeTemplates_1.CodeTemplates(),
    promptEngineering: new PromptEngineering_1.PromptEngineering()
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "pythonRuntime", { enumerable: true, get: function () { return runtime_1.pythonRuntime; } });
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "pythonEcosystem", { enumerable: true, get: function () { return ecosystem_1.pythonEcosystem; } });
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "pythonIdioms", { enumerable: true, get: function () { return idioms_1.pythonIdioms; } });
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "pythonAstPatterns", { enumerable: true, get: function () { return ast_patterns_1.pythonAstPatterns; } });
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferPythonTypes", { enumerable: true, get: function () { return type_inference_1.inferPythonTypes; } });
var django_1 = require("./templates/django");
Object.defineProperty(exports, "djangoTemplate", { enumerable: true, get: function () { return django_1.djangoTemplate; } });
var fastapi_1 = require("./templates/fastapi");
Object.defineProperty(exports, "fastApiTemplate", { enumerable: true, get: function () { return fastapi_1.fastApiTemplate; } });
var pytorch_1 = require("./templates/pytorch");
Object.defineProperty(exports, "pytorchTemplate", { enumerable: true, get: function () { return pytorch_1.pytorchTemplate; } });
