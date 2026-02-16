export const zigRuntime = {
  name: "Zig (LLVM backend)",
  supportedVersions: ["0.11", "0.12"],
  memoryModel: {
    stack: "Explicit stack allocation with predictable lifetimes",
    heap: "Manual allocation via allocator interfaces",
    gc: "No GC; deterministic deallocation",
    ownership: "Explicit allocator ownership; no hidden allocations"
  },
  concurrencyModel: {
    async: "Async/await with explicit suspension points",
    threads: "std.Thread with explicit joins",
    eventedIo: "std.event with manual polling",
    distribution: "None; use OS primitives or libraries"
  },
  compilation: {
    pipeline: ["Zig source", "LLVM IR", "native/wasm"],
    artifacts: [".o", ".a", ".exe", ".wasm"],
    alternatives: ["Stage1/Stage2 compiler", "cross-compilation built-in"]
  },
  performance: {
    latency: "Low overhead with no runtime GC",
    throughput: "High for systems workloads with careful allocation",
    notes: ["Avoid hidden allocations", "Prefer stack/slice usage", "Use comptime to remove runtime work"]
  },
  ffi: {
    c: ["@cImport", "extern declarations"],
    native: ["linkSystemLibrary", "linkLibC"],
    wasm: ["wasm32-wasi", "freestanding WASM"]
  }
};
