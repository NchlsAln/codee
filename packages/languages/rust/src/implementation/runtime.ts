export const rustRuntime = {
  name: "Rust",
  editions: ["2018", "2021"],
  ownership: {
    borrowChecker: "Enforces aliasing XOR mutability",
    lifetimes: "Static and inferred lifetimes with NLL",
    nll: "Non-lexical lifetimes reduce false borrow conflicts",
  },
  memory: {
    stackVsHeap: "Stack for small values, heap via Box/Vec",
    smartPointers: ["Box", "Rc", "Arc", "Cow"],
    allocator: "Global allocator with custom hooks",
  },
  concurrency: {
    traits: "Send/Sync encode thread safety",
    primitives: ["Mutex", "RwLock", "Atomic*"],
    channels: ["std::sync::mpsc", "crossbeam", "tokio"],
    parallel: "rayon work-stealing threads",
  },
  asyncRuntime: {
    executors: ["tokio", "async-std"],
    futures: "Futures and streams with async/await",
    select: "select! for concurrent awaits",
  },
  unsafe: {
    pointers: "Raw pointers and manual aliasing",
    ffi: "extern blocks and unsafe boundary checks",
    primitives: ["union", "MaybeUninit"],
    tools: ["Miri", "sanitizers"],
  },
  macros: {
    declarative: "macro_rules!",
    procedural: "derive, attribute, and function-like",
    hygiene: "Scoped expansion with tokens",
  },
  memoryModel: {
    stack: "Values on stack with deterministic drop",
    heap: "Explicit heap allocation via Box, Vec, Arc, etc.",
    gc: "No GC; ownership and lifetimes enforce safety",
    ownership: "Move semantics with borrowing and lifetimes",
  },
  concurrencyModel: {
    threading: "std::thread with Send/Sync guarantees",
    async: "async/await with executors (tokio, async-std)",
    messaging: "channels (std, tokio, crossbeam)",
    parallel: "rayon data-parallel iterators",
  },
  compilation: {
    pipeline: ["rustc", "LLVM", "native binary"],
    artifacts: [".rlib", "static/dynamic libs", "bin"],
    buildSystem: "cargo",
  },
  performance: {
    latency: "Low runtime overhead; fast startup",
    throughput: "High for CPU-bound workloads",
    notes: ["Zero-cost abstractions", "Predictable memory", "Inlining and monomorphization"],
  },
  ffi: {
    c: ['extern "C"', "bindgen"],
    cpp: ["cxx", "autocxx"],
    wasm: ["wasm-bindgen", "wasm32-unknown-unknown"],
  },
};
