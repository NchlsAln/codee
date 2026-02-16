export const crystalRuntime = {
  name: "Crystal (LLVM backend)",
  supportedVersions: ["1.10", "1.11"],
  memoryModel: {
    stack: "Value types on stack where possible",
    heap: "Boehm GC for managed allocations",
    gc: "Stop-the-world conservative GC",
    ownership: "Managed references with deterministic value types"
  },
  concurrencyModel: {
    fibers: "Lightweight fibers scheduled by the runtime",
    channels: "Channel(T) for message passing",
    async: "Non-blocking IO with event loop",
    distribution: "Library-based; no built-in distribution"
  },
  compilation: {
    pipeline: ["Crystal AST", "LLVM IR", "native binary"],
    artifacts: ["binary", ".o"],
    alternatives: ["cross-compile with --target"]
  },
  performance: {
    latency: "Low overhead with native compilation",
    throughput: "High for IO-heavy workloads",
    notes: ["Avoid accidental Nil unions", "Prefer structs for hot paths", "Use Channels for coordination"]
  },
  ffi: {
    c: ["lib bindings", "fun declarations"],
    native: ["shards with native extensions"],
    wasm: ["experimental wasm targets"]
  }
};
