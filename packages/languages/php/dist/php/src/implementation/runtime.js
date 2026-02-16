"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpRuntime = void 0;
exports.phpRuntime = {
    name: "PHP 8.x (Zend Engine)",
    supportedVersions: ["8.1", "8.2", "8.3"],
    memoryModel: {
        stack: "C stack frames with per-request execution",
        heap: "Refcounted zvals on a managed heap",
        gc: "Cycle collector for zval graphs",
        ownership: "Shared references with copy-on-write semantics"
    },
    concurrencyModel: {
        requestModel: "Process or thread per request under FPM/Apache",
        async: "Event loops via ReactPHP, Amp, or Swoole",
        fibers: "Fibers for cooperative scheduling",
        queues: "Background jobs via queue workers"
    },
    compilation: {
        pipeline: ["parse", "opcodes", "execute"],
        artifacts: ["opcache"],
        alternatives: ["JIT", "Swoole runtime"]
    },
    performance: {
        latency: "Low per-request latency with OPcache",
        throughput: "Good for web workloads with FPM scaling",
        notes: ["Warm OPcache", "Avoid autoloading hot paths", "Use typed properties"]
    },
    ffi: {
        c: ["FFI extension", "PHP extension APIs"],
        native: ["PECL extensions", "C/C++ modules"],
        wasm: ["Wasm runtimes via extensions"]
    }
};
