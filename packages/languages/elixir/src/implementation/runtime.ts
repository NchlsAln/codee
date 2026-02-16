export const elixirRuntime = {
  name: "Elixir on BEAM",
  supportedVersions: ["1.15", "1.16"],
  memoryModel: {
    stack: "Per-process stacks",
    heap: "Per-process heaps with generational GC",
    gc: "Per-process GC with minor/major collections",
    ownership: "Immutable data with copy-on-write across processes"
  },
  concurrencyModel: {
    actors: "Lightweight processes with message passing",
    supervision: "OTP supervisors and fault isolation",
    async: "Task and GenServer for async work",
    distribution: "Node clustering with transparent messaging"
  },
  compilation: {
    pipeline: ["Elixir AST", "Erlang AST", "BEAM bytecode"],
    artifacts: [".beam"],
    alternatives: ["Erlang/OTP"]
  },
  performance: {
    latency: "Fast for long-running services",
    throughput: "High for concurrent IO-heavy workloads",
    notes: ["Use ETS for shared reads", "Avoid large binary copies"]
  },
  ffi: {
    c: ["NIFs", "Ports"],
    native: ["Rustler"],
    wasm: ["Wasmex"]
  }
};
