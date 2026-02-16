export const typescriptRuntime = {
  name: "TypeScript",
  supportedRuntimes: ["node", "deno", "bun", "browser"],
  moduleSystems: ["cjs", "esm"],
  memoryModel: {
    stack: "JavaScript call stack",
    heap: "Managed heap with garbage collection",
    gc: "Tracing GC (V8/JavaScriptCore/SpiderMonkey)",
    ownership: "Shared references; no ownership types"
  },
  concurrencyModel: {
    async: "Event loop with promises, microtasks, and async/await",
    threading: "Worker threads (Node) or Web Workers (browser)",
    processes: "Child processes or clustering in Node",
    syncPrimitives: "Atomics and SharedArrayBuffer (where available)"
  },
  compilation: {
    pipeline: ["tsc", "type-check", "emit js"],
    artifacts: [".js", ".d.ts", ".map"],
    bundlers: ["esbuild", "swc", "webpack", "rollup", "vite"]
  },
  performance: {
    latency: "Fast for IO-bound services",
    throughput: "High for async IO; CPU-bound limited per thread",
    notes: ["Use workers for CPU-heavy work", "Prefer streaming APIs"]
  },
  ffi: {
    native: ["Node-API", "node-addon-api", "ffi-napi"],
    wasm: ["WebAssembly", "wasmtime"],
    interop: ["CJS/ESM interop", "TS/JS direct interop"]
  }
};
