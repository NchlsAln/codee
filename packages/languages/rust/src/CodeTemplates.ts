import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { stringsTemplate } from "./templates/stdlib/strings";
import { ioTemplate } from "./templates/stdlib/io";
import { mathTemplate } from "./templates/stdlib/math";
import { routingTemplate } from "./templates/web/routing";
import { middlewareTemplate } from "./templates/web/middleware";
import { authTemplate } from "./templates/web/auth";
import { websocketsTemplate } from "./templates/web/websockets";
import { ormTemplate } from "./templates/database/orm";
import { migrationsTemplate } from "./templates/database/migrations";
import { queriesTemplate } from "./templates/database/queries";
import { connectionsTemplate } from "./templates/database/connections";
import { asyncTemplate } from "./templates/concurrency/async";
import { parallelTemplate } from "./templates/concurrency/parallel";
import { actorsTemplate } from "./templates/concurrency/actors";
import { channelsTemplate } from "./templates/concurrency/channels";
import { unitTemplate } from "./templates/testing/unit";
import { mockTemplate } from "./templates/testing/mock";
import { propertyTemplate } from "./templates/testing/property";
import { benchmarkTemplate } from "./templates/testing/benchmark";
import { cliArgsTemplate } from "./templates/cli/args";
import { cliConfigTemplate } from "./templates/cli/config";
import { cliLoggingTemplate } from "./templates/cli/logging";
import { httpClientTemplate } from "./templates/http/client";
import { httpServerTemplate } from "./templates/http/server";
import { httpRestTemplate } from "./templates/http/rest";
import { httpGraphqlTemplate } from "./templates/http/graphql";
import { jsonTemplate } from "./templates/serialization/json";
import { xmlTemplate } from "./templates/serialization/xml";
import { binaryTemplate } from "./templates/serialization/binary";
import { protobufTemplate } from "./templates/serialization/protobuf";
import { hashingTemplate } from "./templates/crypto/hashing";
import { encryptionTemplate } from "./templates/crypto/encryption";
import { jwtTemplate } from "./templates/crypto/jwt";
import { ffiCTemplate } from "./templates/ffi/c";
import { ffiWasmTemplate } from "./templates/ffi/wasm";
import { ffiNativeTemplate } from "./templates/ffi/native";
import { cliTemplate } from "./templates/cli";
import { axumTemplate } from "./templates/axum";
import { kernelModulesTemplate } from "./templates/systems-programming/kernel-modules";
import { embeddedBareMetalTemplate } from "./templates/systems-programming/embedded-bare-metal";
import { deviceDriversTemplate } from "./templates/systems-programming/device-drivers";
import { realTimeSystemsTemplate } from "./templates/systems-programming/real-time-systems";
import { tokioServersTemplate } from "./templates/async-networking/tokio-servers";
import { hyperHttpTemplate } from "./templates/async-networking/hyper-http";
import { tonicGrpcTemplate } from "./templates/async-networking/tonic-grpc";
import { quicImplementationTemplate } from "./templates/async-networking/quic-implementation";
import { wasmBindgenTemplate } from "./templates/webassembly/wasm-bindgen";
import { wasmPackWorkflowTemplate } from "./templates/webassembly/wasm-pack-workflow";
import { wasiModulesTemplate } from "./templates/webassembly/wasi-modules";
import { yewFrontendTemplate } from "./templates/webassembly/yew-frontend";
import { simdOptimizationTemplate } from "./templates/high-performance/simd-optimization";
import { lockFreeStructuresTemplate } from "./templates/high-performance/lock-free-structures";
import { zeroCopyParsingTemplate } from "./templates/high-performance/zero-copy-parsing";
import { gpuComputeTemplate } from "./templates/high-performance/gpu-compute";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("rust", {
      idioms: [
        "Prefer ownership-friendly APIs.",
        "Use Result for fallible operations.",
        "Use iterators and avoid clones in hot paths.",
        "Prefer borrowing over allocation.",
      ],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringsTemplate(),
        "stdlib.io": ioTemplate(),
        "stdlib.math": mathTemplate(),
        "web.routing": routingTemplate(),
        "web.middleware": middlewareTemplate(),
        "web.auth": authTemplate(),
        "web.websockets": websocketsTemplate(),
        "database.orm": ormTemplate(),
        "database.migrations": migrationsTemplate(),
        "database.queries": queriesTemplate(),
        "database.connections": connectionsTemplate(),
        "concurrency.async": asyncTemplate(),
        "concurrency.parallel": parallelTemplate(),
        "concurrency.actors": actorsTemplate(),
        "concurrency.channels": channelsTemplate(),
        "testing.unit": unitTemplate(),
        "testing.mock": mockTemplate(),
        "testing.property": propertyTemplate(),
        "testing.benchmark": benchmarkTemplate(),
        "cli.args": cliArgsTemplate(),
        "cli.config": cliConfigTemplate(),
        "cli.logging": cliLoggingTemplate(),
        "http.client": httpClientTemplate(),
        "http.server": httpServerTemplate(),
        "http.rest": httpRestTemplate(),
        "http.graphql": httpGraphqlTemplate(),
        "serialization.json": jsonTemplate(),
        "serialization.xml": xmlTemplate(),
        "serialization.binary": binaryTemplate(),
        "serialization.protobuf": protobufTemplate(),
        "crypto.hashing": hashingTemplate(),
        "crypto.encryption": encryptionTemplate(),
        "crypto.jwt": jwtTemplate(),
        "ffi.c": ffiCTemplate(),
        "ffi.wasm": ffiWasmTemplate(),
        "ffi.native": ffiNativeTemplate(),
        "systems-programming.kernel-modules": kernelModulesTemplate(),
        "systems-programming.embedded-bare-metal": embeddedBareMetalTemplate(),
        "systems-programming.device-drivers": deviceDriversTemplate(),
        "systems-programming.real-time-systems": realTimeSystemsTemplate(),
        "async-networking.tokio-servers": tokioServersTemplate(),
        "async-networking.hyper-http": hyperHttpTemplate(),
        "async-networking.tonic-grpc": tonicGrpcTemplate(),
        "async-networking.quic-implementation": quicImplementationTemplate(),
        "webassembly.wasm-bindgen": wasmBindgenTemplate(),
        "webassembly.wasm-pack-workflow": wasmPackWorkflowTemplate(),
        "webassembly.wasi-modules": wasiModulesTemplate(),
        "webassembly.yew-frontend": yewFrontendTemplate(),
        "high-performance.simd-optimization": simdOptimizationTemplate(),
        "high-performance.lock-free-structures": lockFreeStructuresTemplate(),
        "high-performance.zero-copy-parsing": zeroCopyParsingTemplate(),
        "high-performance.gpu-compute": gpuComputeTemplate(),
      },
      frameworkTemplates: {
        "axum.route": axumTemplate(),
        "cli.basic": cliTemplate(),
      },
      testTemplates: {
        rusttest: unitTemplate(),
      },
    });
  }
}
