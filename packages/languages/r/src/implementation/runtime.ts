export const rRuntime = {
  name: "R interpreter",
  supportedVersions: ["4.3", "4.4"],
  memoryModel: {
    stack: "Function call frames with lazy promises",
    heap: "Vector objects on heap with copy-on-modify semantics",
    gc: "Generational GC for R objects",
    ownership: "Copy-on-write with shared object references"
  },
  concurrencyModel: {
    async: "Future/promises and event loops via packages",
    threads: "Limited; parallel via fork/PSOCK clusters",
    channels: "Queue-based via packages (e.g., callr, later)",
    distribution: "Parallel package for multi-node execution"
  },
  compilation: {
    pipeline: ["R source", "bytecode (optional)", "native via JIT/BLAS"],
    artifacts: [".R", ".rds"],
    alternatives: ["Rcpp", "compiler package"]
  },
  performance: {
    latency: "Interpreted with optimized primitives",
    throughput: "High for vectorized workloads",
    notes: ["Prefer vectorized ops", "Avoid growing objects in loops", "Use data.table for large data"]
  },
  ffi: {
    c: [".Call", ".C", "Rcpp"],
    native: ["Rcpp modules", "cpp11"],
    wasm: ["WebR (experimental)"]
  }
};
