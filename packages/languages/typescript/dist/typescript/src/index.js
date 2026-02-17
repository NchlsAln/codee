"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityHardening =
  exports.bundleAnalyzer =
  exports.typeCoverageImprover =
  exports.reactOptimizer =
  exports.apiContractsTemplate =
  exports.stateMachinesTemplate =
  exports.brandTypesTemplate =
  exports.advancedGenericsTemplate =
  exports.turborepoPipelinesTemplate =
  exports.sveltekitFullstackTemplate =
  exports.remixLoadersTemplate =
  exports.nextjsAppRouterTemplate =
  exports.websocketServersTemplate =
  exports.graphqlCodegenTemplate =
  exports.trpcRoutersTemplate =
  exports.nestjsArchitectureTemplate =
  exports.solidJsTemplate =
  exports.svelteKitTemplate =
  exports.vueCompositionTemplate =
  exports.reactAdvancedTemplate =
  exports.nestjsTemplate =
  exports.nextjsTemplate =
  exports.reactTemplate =
  exports.inferTypeScriptTypes =
  exports.typescriptAstPatterns =
  exports.typescriptIdioms =
  exports.typescriptEcosystem =
  exports.typescriptRuntime =
  exports.PromptEngineering =
  exports.CodeTemplates =
  exports.LanguageServer =
  exports.LanguageAnalyzer =
  exports.typescriptDefinition =
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
exports.typescriptDefinition = {
  id: "typescript",
  name: "TypeScript",
  extensions: [".ts", ".tsx"],
  serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
  templates: new CodeTemplates_1.CodeTemplates(),
  promptEngineering: new PromptEngineering_1.PromptEngineering(),
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "typescriptRuntime", {
  enumerable: true,
  get: function () {
    return runtime_1.typescriptRuntime;
  },
});
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "typescriptEcosystem", {
  enumerable: true,
  get: function () {
    return ecosystem_1.typescriptEcosystem;
  },
});
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "typescriptIdioms", {
  enumerable: true,
  get: function () {
    return idioms_1.typescriptIdioms;
  },
});
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "typescriptAstPatterns", {
  enumerable: true,
  get: function () {
    return ast_patterns_1.typescriptAstPatterns;
  },
});
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferTypeScriptTypes", {
  enumerable: true,
  get: function () {
    return type_inference_1.inferTypeScriptTypes;
  },
});
var react_1 = require("./templates/react");
Object.defineProperty(exports, "reactTemplate", {
  enumerable: true,
  get: function () {
    return react_1.reactTemplate;
  },
});
var nextjs_1 = require("./templates/nextjs");
Object.defineProperty(exports, "nextjsTemplate", {
  enumerable: true,
  get: function () {
    return nextjs_1.nextjsTemplate;
  },
});
var nestjs_1 = require("./templates/nestjs");
Object.defineProperty(exports, "nestjsTemplate", {
  enumerable: true,
  get: function () {
    return nestjs_1.nestjsTemplate;
  },
});
var react_advanced_1 = require("./templates/frontend-frameworks/react-advanced");
Object.defineProperty(exports, "reactAdvancedTemplate", {
  enumerable: true,
  get: function () {
    return react_advanced_1.reactAdvancedTemplate;
  },
});
var vue_composition_1 = require("./templates/frontend-frameworks/vue-composition");
Object.defineProperty(exports, "vueCompositionTemplate", {
  enumerable: true,
  get: function () {
    return vue_composition_1.vueCompositionTemplate;
  },
});
var svelte_kit_1 = require("./templates/frontend-frameworks/svelte-kit");
Object.defineProperty(exports, "svelteKitTemplate", {
  enumerable: true,
  get: function () {
    return svelte_kit_1.svelteKitTemplate;
  },
});
var solid_js_1 = require("./templates/frontend-frameworks/solid-js");
Object.defineProperty(exports, "solidJsTemplate", {
  enumerable: true,
  get: function () {
    return solid_js_1.solidJsTemplate;
  },
});
var nestjs_architecture_1 = require("./templates/backend-api/nestjs-architecture");
Object.defineProperty(exports, "nestjsArchitectureTemplate", {
  enumerable: true,
  get: function () {
    return nestjs_architecture_1.nestjsArchitectureTemplate;
  },
});
var trpc_routers_1 = require("./templates/backend-api/trpc-routers");
Object.defineProperty(exports, "trpcRoutersTemplate", {
  enumerable: true,
  get: function () {
    return trpc_routers_1.trpcRoutersTemplate;
  },
});
var graphql_codegen_1 = require("./templates/backend-api/graphql-codegen");
Object.defineProperty(exports, "graphqlCodegenTemplate", {
  enumerable: true,
  get: function () {
    return graphql_codegen_1.graphqlCodegenTemplate;
  },
});
var websocket_servers_1 = require("./templates/backend-api/websocket-servers");
Object.defineProperty(exports, "websocketServersTemplate", {
  enumerable: true,
  get: function () {
    return websocket_servers_1.websocketServersTemplate;
  },
});
var nextjs_app_router_1 = require("./templates/fullstack-meta/nextjs-app-router");
Object.defineProperty(exports, "nextjsAppRouterTemplate", {
  enumerable: true,
  get: function () {
    return nextjs_app_router_1.nextjsAppRouterTemplate;
  },
});
var remix_loaders_1 = require("./templates/fullstack-meta/remix-loaders");
Object.defineProperty(exports, "remixLoadersTemplate", {
  enumerable: true,
  get: function () {
    return remix_loaders_1.remixLoadersTemplate;
  },
});
var sveltekit_fullstack_1 = require("./templates/fullstack-meta/sveltekit-fullstack");
Object.defineProperty(exports, "sveltekitFullstackTemplate", {
  enumerable: true,
  get: function () {
    return sveltekit_fullstack_1.sveltekitFullstackTemplate;
  },
});
var turborepo_pipelines_1 = require("./templates/fullstack-meta/turborepo-pipelines");
Object.defineProperty(exports, "turborepoPipelinesTemplate", {
  enumerable: true,
  get: function () {
    return turborepo_pipelines_1.turborepoPipelinesTemplate;
  },
});
var advanced_generics_1 = require("./templates/type-system-mastery/advanced-generics");
Object.defineProperty(exports, "advancedGenericsTemplate", {
  enumerable: true,
  get: function () {
    return advanced_generics_1.advancedGenericsTemplate;
  },
});
var brand_types_1 = require("./templates/type-system-mastery/brand-types");
Object.defineProperty(exports, "brandTypesTemplate", {
  enumerable: true,
  get: function () {
    return brand_types_1.brandTypesTemplate;
  },
});
var state_machines_1 = require("./templates/type-system-mastery/state-machines");
Object.defineProperty(exports, "stateMachinesTemplate", {
  enumerable: true,
  get: function () {
    return state_machines_1.stateMachinesTemplate;
  },
});
var api_contracts_1 = require("./templates/type-system-mastery/api-contracts");
Object.defineProperty(exports, "apiContractsTemplate", {
  enumerable: true,
  get: function () {
    return api_contracts_1.apiContractsTemplate;
  },
});
var react_optimizer_1 = require("./intelligence/react-optimizer");
Object.defineProperty(exports, "reactOptimizer", {
  enumerable: true,
  get: function () {
    return react_optimizer_1.reactOptimizer;
  },
});
var type_coverage_improver_1 = require("./intelligence/type-coverage-improver");
Object.defineProperty(exports, "typeCoverageImprover", {
  enumerable: true,
  get: function () {
    return type_coverage_improver_1.typeCoverageImprover;
  },
});
var bundle_analyzer_1 = require("./intelligence/bundle-analyzer");
Object.defineProperty(exports, "bundleAnalyzer", {
  enumerable: true,
  get: function () {
    return bundle_analyzer_1.bundleAnalyzer;
  },
});
var security_hardening_1 = require("./intelligence/security-hardening");
Object.defineProperty(exports, "securityHardening", {
  enumerable: true,
  get: function () {
    return security_hardening_1.securityHardening;
  },
});
