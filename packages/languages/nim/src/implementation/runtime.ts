export const nimRuntime = {
  name: "Nim (C/JS/LLVM backend)",
  supportedVersions: ["2.0", "1.6"],
  memoryModel: {
    stack: "Value types on stack with copy semantics",
    heap: "ARC/ORC by default; optional ref-counting or GC",
    gc: "ARC/ORC or refc; Boehm GC optional",
    ownership: "Deterministic ref counting with optional tracing"
  },
  concurrencyModel: {
    async: "async/await with event loops (asyncdispatch/chronos)",
    threads: "OS threads via threadpool/std/threads",
    channels: "Channel[T] with send/recv",
    distribution: "Library-based; no built-in distribution"
  },
  compilation: {
    pipeline: ["Nim AST", "C/LLVM/JS", "native/wasm"],
    artifacts: [".c", ".o", ".js", "binary"],
    alternatives: ["--gc:arc", "--gc:orc", "--backend:js"]
  },
  performance: {
    latency: "Low overhead with ARC/ORC",
    throughput: "High for systems workloads and services",
    notes: ["Avoid hidden allocations in hot loops", "Use seq[T] carefully", "Prefer value types"]
  },
  ffi: {
    c: ["importc", "dynlib"],
    native: ["nimble native extensions"],
    wasm: ["wasm backend via llvm"]
  }
};
