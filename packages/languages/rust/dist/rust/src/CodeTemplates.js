"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const strings_1 = require("./templates/stdlib/strings");
const io_1 = require("./templates/stdlib/io");
const math_1 = require("./templates/stdlib/math");
const routing_1 = require("./templates/web/routing");
const middleware_1 = require("./templates/web/middleware");
const auth_1 = require("./templates/web/auth");
const websockets_1 = require("./templates/web/websockets");
const orm_1 = require("./templates/database/orm");
const migrations_1 = require("./templates/database/migrations");
const queries_1 = require("./templates/database/queries");
const connections_1 = require("./templates/database/connections");
const async_1 = require("./templates/concurrency/async");
const parallel_1 = require("./templates/concurrency/parallel");
const actors_1 = require("./templates/concurrency/actors");
const channels_1 = require("./templates/concurrency/channels");
const unit_1 = require("./templates/testing/unit");
const mock_1 = require("./templates/testing/mock");
const property_1 = require("./templates/testing/property");
const benchmark_1 = require("./templates/testing/benchmark");
const args_1 = require("./templates/cli/args");
const config_1 = require("./templates/cli/config");
const logging_1 = require("./templates/cli/logging");
const client_1 = require("./templates/http/client");
const server_1 = require("./templates/http/server");
const rest_1 = require("./templates/http/rest");
const graphql_1 = require("./templates/http/graphql");
const json_1 = require("./templates/serialization/json");
const xml_1 = require("./templates/serialization/xml");
const binary_1 = require("./templates/serialization/binary");
const protobuf_1 = require("./templates/serialization/protobuf");
const hashing_1 = require("./templates/crypto/hashing");
const encryption_1 = require("./templates/crypto/encryption");
const jwt_1 = require("./templates/crypto/jwt");
const c_1 = require("./templates/ffi/c");
const wasm_1 = require("./templates/ffi/wasm");
const native_1 = require("./templates/ffi/native");
const cli_1 = require("./templates/cli");
const axum_1 = require("./templates/axum");
const kernel_modules_1 = require("./templates/systems-programming/kernel-modules");
const embedded_bare_metal_1 = require("./templates/systems-programming/embedded-bare-metal");
const device_drivers_1 = require("./templates/systems-programming/device-drivers");
const real_time_systems_1 = require("./templates/systems-programming/real-time-systems");
const tokio_servers_1 = require("./templates/async-networking/tokio-servers");
const hyper_http_1 = require("./templates/async-networking/hyper-http");
const tonic_grpc_1 = require("./templates/async-networking/tonic-grpc");
const quic_implementation_1 = require("./templates/async-networking/quic-implementation");
const wasm_bindgen_1 = require("./templates/webassembly/wasm-bindgen");
const wasm_pack_workflow_1 = require("./templates/webassembly/wasm-pack-workflow");
const wasi_modules_1 = require("./templates/webassembly/wasi-modules");
const yew_frontend_1 = require("./templates/webassembly/yew-frontend");
const simd_optimization_1 = require("./templates/high-performance/simd-optimization");
const lock_free_structures_1 = require("./templates/high-performance/lock-free-structures");
const zero_copy_parsing_1 = require("./templates/high-performance/zero-copy-parsing");
const gpu_compute_1 = require("./templates/high-performance/gpu-compute");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
  constructor() {
    super("rust", {
      idioms: [
        "Prefer ownership-friendly APIs.",
        "Use Result for fallible operations.",
        "Use iterators and avoid clones in hot paths.",
        "Prefer borrowing over allocation.",
      ],
      templates: {
        "stdlib.collections": (0, collections_1.collectionsTemplate)(),
        "stdlib.strings": (0, strings_1.stringsTemplate)(),
        "stdlib.io": (0, io_1.ioTemplate)(),
        "stdlib.math": (0, math_1.mathTemplate)(),
        "web.routing": (0, routing_1.routingTemplate)(),
        "web.middleware": (0, middleware_1.middlewareTemplate)(),
        "web.auth": (0, auth_1.authTemplate)(),
        "web.websockets": (0, websockets_1.websocketsTemplate)(),
        "database.orm": (0, orm_1.ormTemplate)(),
        "database.migrations": (0, migrations_1.migrationsTemplate)(),
        "database.queries": (0, queries_1.queriesTemplate)(),
        "database.connections": (0, connections_1.connectionsTemplate)(),
        "concurrency.async": (0, async_1.asyncTemplate)(),
        "concurrency.parallel": (0, parallel_1.parallelTemplate)(),
        "concurrency.actors": (0, actors_1.actorsTemplate)(),
        "concurrency.channels": (0, channels_1.channelsTemplate)(),
        "testing.unit": (0, unit_1.unitTemplate)(),
        "testing.mock": (0, mock_1.mockTemplate)(),
        "testing.property": (0, property_1.propertyTemplate)(),
        "testing.benchmark": (0, benchmark_1.benchmarkTemplate)(),
        "cli.args": (0, args_1.cliArgsTemplate)(),
        "cli.config": (0, config_1.cliConfigTemplate)(),
        "cli.logging": (0, logging_1.cliLoggingTemplate)(),
        "http.client": (0, client_1.httpClientTemplate)(),
        "http.server": (0, server_1.httpServerTemplate)(),
        "http.rest": (0, rest_1.httpRestTemplate)(),
        "http.graphql": (0, graphql_1.httpGraphqlTemplate)(),
        "serialization.json": (0, json_1.jsonTemplate)(),
        "serialization.xml": (0, xml_1.xmlTemplate)(),
        "serialization.binary": (0, binary_1.binaryTemplate)(),
        "serialization.protobuf": (0, protobuf_1.protobufTemplate)(),
        "crypto.hashing": (0, hashing_1.hashingTemplate)(),
        "crypto.encryption": (0, encryption_1.encryptionTemplate)(),
        "crypto.jwt": (0, jwt_1.jwtTemplate)(),
        "ffi.c": (0, c_1.ffiCTemplate)(),
        "ffi.wasm": (0, wasm_1.ffiWasmTemplate)(),
        "ffi.native": (0, native_1.ffiNativeTemplate)(),
        "systems-programming.kernel-modules": (0, kernel_modules_1.kernelModulesTemplate)(),
        "systems-programming.embedded-bare-metal": (0,
        embedded_bare_metal_1.embeddedBareMetalTemplate)(),
        "systems-programming.device-drivers": (0, device_drivers_1.deviceDriversTemplate)(),
        "systems-programming.real-time-systems": (0, real_time_systems_1.realTimeSystemsTemplate)(),
        "async-networking.tokio-servers": (0, tokio_servers_1.tokioServersTemplate)(),
        "async-networking.hyper-http": (0, hyper_http_1.hyperHttpTemplate)(),
        "async-networking.tonic-grpc": (0, tonic_grpc_1.tonicGrpcTemplate)(),
        "async-networking.quic-implementation": (0,
        quic_implementation_1.quicImplementationTemplate)(),
        "webassembly.wasm-bindgen": (0, wasm_bindgen_1.wasmBindgenTemplate)(),
        "webassembly.wasm-pack-workflow": (0, wasm_pack_workflow_1.wasmPackWorkflowTemplate)(),
        "webassembly.wasi-modules": (0, wasi_modules_1.wasiModulesTemplate)(),
        "webassembly.yew-frontend": (0, yew_frontend_1.yewFrontendTemplate)(),
        "high-performance.simd-optimization": (0, simd_optimization_1.simdOptimizationTemplate)(),
        "high-performance.lock-free-structures": (0,
        lock_free_structures_1.lockFreeStructuresTemplate)(),
        "high-performance.zero-copy-parsing": (0, zero_copy_parsing_1.zeroCopyParsingTemplate)(),
        "high-performance.gpu-compute": (0, gpu_compute_1.gpuComputeTemplate)(),
      },
      frameworkTemplates: {
        "axum.route": (0, axum_1.axumTemplate)(),
        "cli.basic": (0, cli_1.cliTemplate)(),
      },
      testTemplates: {
        rusttest: (0, unit_1.unitTemplate)(),
      },
    });
  }
}
exports.CodeTemplates = CodeTemplates;
