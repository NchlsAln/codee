export const rubyRuntime = {
  name: "Ruby (MRI/YARV)",
  supportedVersions: ["3.1", "3.2", "3.3"],
  memoryModel: {
    stack: "Native stack per thread",
    heap: "Managed heap with object slots",
    gc: "Generational mark and sweep with compaction",
    ownership: "Shared references with GC"
  },
  concurrencyModel: {
    threading: "Native threads under a global VM lock",
    async: "Event loops via Async/Falcon or EventMachine",
    fibers: "Fibers with scheduler for cooperative IO",
    background: "Job queues via Sidekiq"
  },
  compilation: {
    pipeline: ["parse", "bytecode", "YARV VM"],
    artifacts: [".rbc (JRuby)", "compiled extensions"],
    alternatives: ["JRuby", "TruffleRuby"]
  },
  performance: {
    latency: "Moderate startup; improved with bootsnap",
    throughput: "Good for IO workloads; CPU bound limited by GVL",
    notes: ["Use frozen_string_literal", "Prefer enums for iteration"]
  },
  ffi: {
    c: ["Fiddle", "ffi gem", "native extensions"],
    native: ["C extensions", "Rust extensions via helix"],
    wasm: ["Wasm runtimes via gems"]
  }
};
