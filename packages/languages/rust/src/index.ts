import { LanguageDefinition } from "@codee/lang-common";
import { LanguageAnalyzer } from "./LanguageAnalyzer";
import { LanguageServer } from "./LanguageServer";
import { CodeTemplates } from "./CodeTemplates";
import { PromptEngineering } from "./PromptEngineering";

export const rustDefinition: LanguageDefinition = {
  id: "rust",
  name: "Rust",
  extensions: [".rs"],
  serverFactory: (projectPath) => new LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer(),
  templates: new CodeTemplates(),
  promptEngineering: new PromptEngineering(),
};

export { LanguageAnalyzer, LanguageServer, CodeTemplates, PromptEngineering };
export { rustRuntime } from "./implementation/runtime";
export { rustEcosystem } from "./implementation/ecosystem";
export { rustIdioms } from "./implementation/idioms";
export { rustAstPatterns } from "./analysis/ast-patterns";
export { inferRustTypes } from "./analysis/type-inference";
export { axumTemplate } from "./templates/axum";
export { cliTemplate } from "./templates/cli";
export { kernelModulesTemplate } from "./templates/systems-programming/kernel-modules";
export { embeddedBareMetalTemplate } from "./templates/systems-programming/embedded-bare-metal";
export { deviceDriversTemplate } from "./templates/systems-programming/device-drivers";
export { realTimeSystemsTemplate } from "./templates/systems-programming/real-time-systems";
export { tokioServersTemplate } from "./templates/async-networking/tokio-servers";
export { hyperHttpTemplate } from "./templates/async-networking/hyper-http";
export { tonicGrpcTemplate } from "./templates/async-networking/tonic-grpc";
export { quicImplementationTemplate } from "./templates/async-networking/quic-implementation";
export { wasmBindgenTemplate } from "./templates/webassembly/wasm-bindgen";
export { wasmPackWorkflowTemplate } from "./templates/webassembly/wasm-pack-workflow";
export { wasiModulesTemplate } from "./templates/webassembly/wasi-modules";
export { yewFrontendTemplate } from "./templates/webassembly/yew-frontend";
export { simdOptimizationTemplate } from "./templates/high-performance/simd-optimization";
export { lockFreeStructuresTemplate } from "./templates/high-performance/lock-free-structures";
export { zeroCopyParsingTemplate } from "./templates/high-performance/zero-copy-parsing";
export { gpuComputeTemplate } from "./templates/high-performance/gpu-compute";
export { borrowCheckerAssistant } from "./intelligence/borrow-checker-assistant";
export { unsafeAuditor } from "./intelligence/unsafe-auditor";
export { asyncRefactoring } from "./intelligence/async-refactoring";
export { performanceProfiler } from "./intelligence/performance-profiler";
export { ffiGenerator } from "./intelligence/ffi-generator";
