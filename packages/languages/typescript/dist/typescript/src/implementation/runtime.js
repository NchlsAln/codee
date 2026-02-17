"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptRuntime = void 0;
exports.typescriptRuntime = {
  name: "TypeScript",
  supportedRuntimes: ["node", "deno", "bun", "browser"],
  runtimeProfiles: {
    node: "V8 + libuv, rich ecosystem, CommonJS/ESM interop",
    deno: "Secure by default, URL-first imports, built-in tooling",
    bun: "Fast runtime with bundler and test runner",
    browser: "DOM and Web APIs, bundler required",
  },
  eventLoop: {
    phases: "timers -> pending -> idle/prepare -> poll -> check -> close",
    microtasks: "Promise callbacks run between phases",
    libuv: "IO polling and async handles in Node",
  },
  workers: {
    threads: "Worker threads for CPU-bound work",
    cluster: "Multi-process scaling for Node servers",
    webWorkers: "Browser Worker APIs for parallelism",
  },
  v8Internals: {
    hiddenClasses: "Shape transitions optimize property access",
    inlineCaching: "Monomorphic call sites are fastest",
    turbofan: "Optimizing compiler for hot paths",
  },
  memory: {
    heap: "Managed heap with generational GC",
    snapshots: "Heap snapshots and allocation profiles",
    leaks: "Common sources: event listeners, caches, closures",
  },
  compiler: {
    tsc: "Full type checking with emit",
    transpileOnly: "Skip type checks in build pipelines",
    projectReferences: "Incremental builds across packages",
  },
  moduleSystems: ["cjs", "esm"],
  memoryModel: {
    stack: "JavaScript call stack",
    heap: "Managed heap with garbage collection",
    gc: "Tracing GC (V8/JavaScriptCore/SpiderMonkey)",
    ownership: "Shared references; no ownership types",
  },
  concurrencyModel: {
    async: "Event loop with promises, microtasks, and async/await",
    threading: "Worker threads (Node) or Web Workers (browser)",
    processes: "Child processes or clustering in Node",
    syncPrimitives: "Atomics and SharedArrayBuffer (where available)",
  },
  compilation: {
    pipeline: ["tsc", "type-check", "emit js"],
    artifacts: [".js", ".d.ts", ".map"],
    bundlers: ["esbuild", "swc", "webpack", "rollup", "vite"],
  },
  performance: {
    latency: "Fast for IO-bound services",
    throughput: "High for async IO; CPU-bound limited per thread",
    notes: ["Use workers for CPU-heavy work", "Prefer streaming APIs"],
  },
  ffi: {
    native: ["Node-API", "node-addon-api", "ffi-napi"],
    wasm: ["WebAssembly", "wasmtime"],
    interop: ["CJS/ESM interop", "TS/JS direct interop"],
  },
};
