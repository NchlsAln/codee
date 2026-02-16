export const erlangRuntime = {
  name: "Erlang/OTP on BEAM",
  supportedVersions: ["26", "27"],
  memoryModel: {
    stack: "Per-process stacks",
    heap: "Per-process heaps",
    gc: "Per-process generational GC",
    ownership: "Immutable data with copy-on-write"
  },
  concurrencyModel: {
    actors: "Lightweight processes with message passing",
    supervision: "OTP supervisors and restart strategies",
    distribution: "Distributed nodes with transparent messaging",
    async: "spawn and gen_server for concurrent work"
  },
  compilation: {
    pipeline: ["parse", "core Erlang", "BEAM"],
    artifacts: [".beam"],
    alternatives: ["HiPE (legacy)"]
  },
  performance: {
    latency: "Fast for long-running services",
    throughput: "High for concurrent IO workloads",
    notes: ["Use ETS for hot reads", "Minimize large binary copies"]
  },
  ffi: {
    c: ["NIFs", "Ports"],
    native: ["C drivers"],
    wasm: ["Wasm runtimes via ports"]
  }
};
