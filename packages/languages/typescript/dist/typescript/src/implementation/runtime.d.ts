export declare const typescriptRuntime: {
  name: string;
  supportedRuntimes: string[];
  runtimeProfiles: {
    node: string;
    deno: string;
    bun: string;
    browser: string;
  };
  eventLoop: {
    phases: string;
    microtasks: string;
    libuv: string;
  };
  workers: {
    threads: string;
    cluster: string;
    webWorkers: string;
  };
  v8Internals: {
    hiddenClasses: string;
    inlineCaching: string;
    turbofan: string;
  };
  memory: {
    heap: string;
    snapshots: string;
    leaks: string;
  };
  compiler: {
    tsc: string;
    transpileOnly: string;
    projectReferences: string;
  };
  moduleSystems: string[];
  memoryModel: {
    stack: string;
    heap: string;
    gc: string;
    ownership: string;
  };
  concurrencyModel: {
    async: string;
    threading: string;
    processes: string;
    syncPrimitives: string;
  };
  compilation: {
    pipeline: string[];
    artifacts: string[];
    bundlers: string[];
  };
  performance: {
    latency: string;
    throughput: string;
    notes: string[];
  };
  ffi: {
    native: string[];
    wasm: string[];
    interop: string[];
  };
};
