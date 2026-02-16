export const haskellRuntime = {
  name: "GHC runtime",
  supportedVersions: ["9.4", "9.6", "9.8"],
  memoryModel: {
    stack: "Lightweight stacks with lazy thunks",
    heap: "Generational heap with compacting GC",
    gc: "Parallel, generational GC",
    ownership: "Pure values with explicit strictness annotations"
  },
  concurrencyModel: {
    threads: "Lightweight green threads on OS threads",
    stm: "Software Transactional Memory (STM)",
    async: "Async/await patterns via async package",
    distribution: "Cloud Haskell / distributed-process"
  },
  compilation: {
    pipeline: ["Haskell source", "Core", "STG", "native/bytecode"],
    artifacts: [".hi", ".o", "binaries"],
    alternatives: ["GHCi bytecode", "AOT native"]
  },
  performance: {
    latency: "Predictable with strictness tuning",
    throughput: "High for concurrent IO workloads",
    notes: ["Avoid space leaks", "Use strict fields for hot paths", "Profile with +RTS"]
  },
  ffi: {
    c: ["foreign import", "capi"],
    native: ["bindings via c2hs/hsc2hs"],
    wasm: ["GHC wasm backend (experimental)"]
  }
};
