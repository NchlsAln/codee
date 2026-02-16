"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferDockerfileTypes =
  exports.dockerfileAstPatterns =
  exports.dockerfileIdioms =
  exports.dockerfileEcosystem =
  exports.dockerfileRuntime =
  exports.PromptEngineering =
  exports.CodeTemplates =
  exports.LanguageServer =
  exports.LanguageAnalyzer =
  exports.dockerfileDefinition =
    void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", {
  enumerable: true,
  get: function () {
    return LanguageAnalyzer_1.LanguageAnalyzer;
  },
});
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", {
  enumerable: true,
  get: function () {
    return LanguageServer_1.LanguageServer;
  },
});
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", {
  enumerable: true,
  get: function () {
    return CodeTemplates_1.CodeTemplates;
  },
});
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", {
  enumerable: true,
  get: function () {
    return PromptEngineering_1.PromptEngineering;
  },
});
const runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "dockerfileRuntime", {
  enumerable: true,
  get: function () {
    return runtime_1.dockerfileRuntime;
  },
});
const ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "dockerfileEcosystem", {
  enumerable: true,
  get: function () {
    return ecosystem_1.dockerfileEcosystem;
  },
});
const idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "dockerfileIdioms", {
  enumerable: true,
  get: function () {
    return idioms_1.dockerfileIdioms;
  },
});
const ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "dockerfileAstPatterns", {
  enumerable: true,
  get: function () {
    return ast_patterns_1.dockerfileAstPatterns;
  },
});
const type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferDockerfileTypes", {
  enumerable: true,
  get: function () {
    return type_inference_1.inferDockerfileTypes;
  },
});
exports.dockerfileDefinition = {
  id: "dockerfile",
  name: "Dockerfile",
  extensions: ["Dockerfile", ".dockerfile", "Dockerfile.*"],
  serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
  templates: new CodeTemplates_1.CodeTemplates(),
  promptEngineering: new PromptEngineering_1.PromptEngineering(),
};
