export const scalaRuntime = {
  runtimeModel: "JVM bytecode with JIT; Scala.js to JavaScript; Scala Native for AOT.",
  packageManager: "sbt (primary), mill",
  lspServer: "metals",
  compilationTargets: ["jvm", "js", "native"],
  memoryModel: {
    stack: "JVM stack frames or native stack",
    heap: "Managed heap on JVM or native heap",
    gc: "JVM GC or Scala Native GC",
    ownership: "Shared references; no ownership types"
  },
  concurrencyModel: {
    futures: "scala.concurrent.Future with ExecutionContext",
    actors: "Akka/Pekko actors and typed actors",
    effects: "ZIO/Cats Effect for structured async",
    streaming: "FS2/Akka Streams for backpressure"
  },
  compilation: {
    pipeline: ["scalac", "bytecode", "JIT"],
    artifacts: [".class", ".jar", ".sjsir", ".nir"],
    toolchains: ["sbt", "mill", "Scala CLI"]
  },
  performance: {
    latency: "Moderate JVM startup; faster on native",
    throughput: "High for long-running services",
    notes: ["Warmup for JIT", "Prefer immutable data"]
  },
  ffi: {
    jvm: ["Java interop", "JNI", "JNA"],
    native: ["Scala Native C interop"],
    wasm: ["Scala.js on WASM runtimes"]
  }
};
