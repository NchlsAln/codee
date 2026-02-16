export const dartRuntime = {
  runtimeModel: "Dart VM with JIT for development and AOT for release.",
  packageManager: "pub via dart or flutter",
  lspServer: "dart language-server",
  compilationTargets: ["vm", "aot", "js"],
  memoryModel: {
    stack: "VM stack frames",
    heap: "Managed heap with GC",
    gc: "Generational GC",
    ownership: "Shared references; no ownership types"
  },
  concurrencyModel: {
    asyncAwait: "Future and async/await",
    isolates: "Isolates for parallelism",
    streams: "Stream and StreamController",
    eventLoop: "Single-threaded event loop"
  },
  compilation: {
    pipeline: ["dart", "kernel", "vm/aot"],
    artifacts: [".dill", ".aot", ".js"],
    toolchains: ["dart", "flutter", "build_runner"]
  },
  performance: {
    latency: "Fast dev iteration with JIT",
    throughput: "Good for UI and services",
    notes: ["Avoid sync IO on UI", "Prefer const constructors"]
  },
  ffi: {
    native: ["dart:ffi"],
    wasm: ["dart:js_interop"],
    platform: ["Platform channels (Flutter)"]
  }
};
