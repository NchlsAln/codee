"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiGenerator =
  exports.performanceProfiler =
  exports.asyncRefactoring =
  exports.unsafeAuditor =
  exports.borrowCheckerAssistant =
  exports.gpuComputeTemplate =
  exports.zeroCopyParsingTemplate =
  exports.lockFreeStructuresTemplate =
  exports.simdOptimizationTemplate =
  exports.yewFrontendTemplate =
  exports.wasiModulesTemplate =
  exports.wasmPackWorkflowTemplate =
  exports.wasmBindgenTemplate =
  exports.quicImplementationTemplate =
  exports.tonicGrpcTemplate =
  exports.hyperHttpTemplate =
  exports.tokioServersTemplate =
  exports.realTimeSystemsTemplate =
  exports.deviceDriversTemplate =
  exports.embeddedBareMetalTemplate =
  exports.kernelModulesTemplate =
  exports.cliTemplate =
  exports.axumTemplate =
  exports.inferRustTypes =
  exports.rustAstPatterns =
  exports.rustIdioms =
  exports.rustEcosystem =
  exports.rustRuntime =
  exports.PromptEngineering =
  exports.CodeTemplates =
  exports.LanguageServer =
  exports.LanguageAnalyzer =
  exports.rustDefinition =
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
exports.rustDefinition = {
  id: "rust",
  name: "Rust",
  extensions: [".rs"],
  serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
  templates: new CodeTemplates_1.CodeTemplates(),
  promptEngineering: new PromptEngineering_1.PromptEngineering(),
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "rustRuntime", {
  enumerable: true,
  get: function () {
    return runtime_1.rustRuntime;
  },
});
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "rustEcosystem", {
  enumerable: true,
  get: function () {
    return ecosystem_1.rustEcosystem;
  },
});
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "rustIdioms", {
  enumerable: true,
  get: function () {
    return idioms_1.rustIdioms;
  },
});
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "rustAstPatterns", {
  enumerable: true,
  get: function () {
    return ast_patterns_1.rustAstPatterns;
  },
});
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferRustTypes", {
  enumerable: true,
  get: function () {
    return type_inference_1.inferRustTypes;
  },
});
var axum_1 = require("./templates/axum");
Object.defineProperty(exports, "axumTemplate", {
  enumerable: true,
  get: function () {
    return axum_1.axumTemplate;
  },
});
var cli_1 = require("./templates/cli");
Object.defineProperty(exports, "cliTemplate", {
  enumerable: true,
  get: function () {
    return cli_1.cliTemplate;
  },
});
var kernel_modules_1 = require("./templates/systems-programming/kernel-modules");
Object.defineProperty(exports, "kernelModulesTemplate", {
  enumerable: true,
  get: function () {
    return kernel_modules_1.kernelModulesTemplate;
  },
});
var embedded_bare_metal_1 = require("./templates/systems-programming/embedded-bare-metal");
Object.defineProperty(exports, "embeddedBareMetalTemplate", {
  enumerable: true,
  get: function () {
    return embedded_bare_metal_1.embeddedBareMetalTemplate;
  },
});
var device_drivers_1 = require("./templates/systems-programming/device-drivers");
Object.defineProperty(exports, "deviceDriversTemplate", {
  enumerable: true,
  get: function () {
    return device_drivers_1.deviceDriversTemplate;
  },
});
var real_time_systems_1 = require("./templates/systems-programming/real-time-systems");
Object.defineProperty(exports, "realTimeSystemsTemplate", {
  enumerable: true,
  get: function () {
    return real_time_systems_1.realTimeSystemsTemplate;
  },
});
var tokio_servers_1 = require("./templates/async-networking/tokio-servers");
Object.defineProperty(exports, "tokioServersTemplate", {
  enumerable: true,
  get: function () {
    return tokio_servers_1.tokioServersTemplate;
  },
});
var hyper_http_1 = require("./templates/async-networking/hyper-http");
Object.defineProperty(exports, "hyperHttpTemplate", {
  enumerable: true,
  get: function () {
    return hyper_http_1.hyperHttpTemplate;
  },
});
var tonic_grpc_1 = require("./templates/async-networking/tonic-grpc");
Object.defineProperty(exports, "tonicGrpcTemplate", {
  enumerable: true,
  get: function () {
    return tonic_grpc_1.tonicGrpcTemplate;
  },
});
var quic_implementation_1 = require("./templates/async-networking/quic-implementation");
Object.defineProperty(exports, "quicImplementationTemplate", {
  enumerable: true,
  get: function () {
    return quic_implementation_1.quicImplementationTemplate;
  },
});
var wasm_bindgen_1 = require("./templates/webassembly/wasm-bindgen");
Object.defineProperty(exports, "wasmBindgenTemplate", {
  enumerable: true,
  get: function () {
    return wasm_bindgen_1.wasmBindgenTemplate;
  },
});
var wasm_pack_workflow_1 = require("./templates/webassembly/wasm-pack-workflow");
Object.defineProperty(exports, "wasmPackWorkflowTemplate", {
  enumerable: true,
  get: function () {
    return wasm_pack_workflow_1.wasmPackWorkflowTemplate;
  },
});
var wasi_modules_1 = require("./templates/webassembly/wasi-modules");
Object.defineProperty(exports, "wasiModulesTemplate", {
  enumerable: true,
  get: function () {
    return wasi_modules_1.wasiModulesTemplate;
  },
});
var yew_frontend_1 = require("./templates/webassembly/yew-frontend");
Object.defineProperty(exports, "yewFrontendTemplate", {
  enumerable: true,
  get: function () {
    return yew_frontend_1.yewFrontendTemplate;
  },
});
var simd_optimization_1 = require("./templates/high-performance/simd-optimization");
Object.defineProperty(exports, "simdOptimizationTemplate", {
  enumerable: true,
  get: function () {
    return simd_optimization_1.simdOptimizationTemplate;
  },
});
var lock_free_structures_1 = require("./templates/high-performance/lock-free-structures");
Object.defineProperty(exports, "lockFreeStructuresTemplate", {
  enumerable: true,
  get: function () {
    return lock_free_structures_1.lockFreeStructuresTemplate;
  },
});
var zero_copy_parsing_1 = require("./templates/high-performance/zero-copy-parsing");
Object.defineProperty(exports, "zeroCopyParsingTemplate", {
  enumerable: true,
  get: function () {
    return zero_copy_parsing_1.zeroCopyParsingTemplate;
  },
});
var gpu_compute_1 = require("./templates/high-performance/gpu-compute");
Object.defineProperty(exports, "gpuComputeTemplate", {
  enumerable: true,
  get: function () {
    return gpu_compute_1.gpuComputeTemplate;
  },
});
var borrow_checker_assistant_1 = require("./intelligence/borrow-checker-assistant");
Object.defineProperty(exports, "borrowCheckerAssistant", {
  enumerable: true,
  get: function () {
    return borrow_checker_assistant_1.borrowCheckerAssistant;
  },
});
var unsafe_auditor_1 = require("./intelligence/unsafe-auditor");
Object.defineProperty(exports, "unsafeAuditor", {
  enumerable: true,
  get: function () {
    return unsafe_auditor_1.unsafeAuditor;
  },
});
var async_refactoring_1 = require("./intelligence/async-refactoring");
Object.defineProperty(exports, "asyncRefactoring", {
  enumerable: true,
  get: function () {
    return async_refactoring_1.asyncRefactoring;
  },
});
var performance_profiler_1 = require("./intelligence/performance-profiler");
Object.defineProperty(exports, "performanceProfiler", {
  enumerable: true,
  get: function () {
    return performance_profiler_1.performanceProfiler;
  },
});
var ffi_generator_1 = require("./intelligence/ffi-generator");
Object.defineProperty(exports, "ffiGenerator", {
  enumerable: true,
  get: function () {
    return ffi_generator_1.ffiGenerator;
  },
});
