export declare const pythonRuntime: {
  name: string;
  supportedVersions: string[];
  internals: {
    gil: string;
    refCounting: string;
    memoryPools: string;
  };
  asyncRuntime: {
    eventLoop: string;
    alternatives: string[];
    notes: string[];
  };
  subinterpreters: {
    pep: string;
    isolation: string;
    sharing: string;
  };
  profiles: {
    cpython: string;
    pypy: string;
    cython: string;
    numba: string;
  };
  python312Plus: {
    perf: string;
    errors: string;
    typing: string;
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
    multiprocessing: string;
    native: string;
  };
  compilation: {
    pipeline: string[];
    artifacts: string[];
    alternativeRuntimes: string[];
  };
  performance: {
    latency: string;
    throughput: string;
    notes: string[];
  };
  ffi: {
    c: string[];
    native: string[];
    wasm: string[];
  };
};
