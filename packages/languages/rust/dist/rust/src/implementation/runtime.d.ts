export declare const rustRuntime: {
  name: string;
  editions: string[];
  ownership: {
    borrowChecker: string;
    lifetimes: string;
    nll: string;
  };
  memory: {
    stackVsHeap: string;
    smartPointers: string[];
    allocator: string;
  };
  concurrency: {
    traits: string;
    primitives: string[];
    channels: string[];
    parallel: string;
  };
  asyncRuntime: {
    executors: string[];
    futures: string;
    select: string;
  };
  unsafe: {
    pointers: string;
    ffi: string;
    primitives: string[];
    tools: string[];
  };
  macros: {
    declarative: string;
    procedural: string;
    hygiene: string;
  };
  memoryModel: {
    stack: string;
    heap: string;
    gc: string;
    ownership: string;
  };
  concurrencyModel: {
    threading: string;
    async: string;
    messaging: string;
    parallel: string;
  };
  compilation: {
    pipeline: string[];
    artifacts: string[];
    buildSystem: string;
  };
  performance: {
    latency: string;
    throughput: string;
    notes: string[];
  };
  ffi: {
    c: string[];
    cpp: string[];
    wasm: string[];
  };
};
