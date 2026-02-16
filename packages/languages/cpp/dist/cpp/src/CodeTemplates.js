"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const stdlib_1 = require("./templates/stdlib");
const modern_cpp_1 = require("./templates/modern-cpp");
const boost_1 = require("./templates/boost");
const qt_1 = require("./templates/qt");
const embedded_1 = require("./templates/embedded");
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
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("cpp", {
            idioms: [
                "Prefer modern C++20 patterns.",
                "Use RAII for resource management.",
                "Prefer smart pointers over raw new/delete.",
                "Use const references where possible."
            ],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "stdlib.strings": (0, strings_1.stringsTemplate)(),
                "stdlib.io": (0, io_1.ioTemplate)(),
                "stdlib.math": (0, math_1.mathTemplate)(),
                "stdlib.containers": (0, stdlib_1.containersTemplate)(),
                "stdlib.smart-pointers": (0, stdlib_1.smartPointersTemplate)(),
                "stdlib.concurrency": (0, stdlib_1.concurrencyTemplate)(),
                "modern-cpp.ranges": (0, modern_cpp_1.rangesTemplate)(),
                "modern-cpp.concepts": (0, modern_cpp_1.conceptsTemplate)(),
                "modern-cpp.coroutines": (0, modern_cpp_1.coroutinesTemplate)(),
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
                "ffi.native": (0, native_1.ffiNativeTemplate)()
            },
            frameworkTemplates: {
                "boost.asio": (0, boost_1.boostTemplate)(),
                "qt.app": (0, qt_1.qtTemplate)(),
                "embedded.baremetal": (0, embedded_1.embeddedTemplate)()
            },
            testTemplates: {
                gtest: (0, unit_1.unitTemplate)()
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
