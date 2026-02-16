import { BaseCodeTemplates } from "@codee/lang-common";
import { containersTemplate, smartPointersTemplate, concurrencyTemplate } from "./templates/stdlib";
import { rangesTemplate, conceptsTemplate, coroutinesTemplate } from "./templates/modern-cpp";
import { boostTemplate } from "./templates/boost";
import { qtTemplate } from "./templates/qt";
import { embeddedTemplate } from "./templates/embedded";
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

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("cpp", {
      idioms: [
        "Prefer modern C++20 patterns.",
        "Use RAII for resource management.",
        "Prefer smart pointers over raw new/delete.",
        "Use const references where possible."
      ],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringsTemplate(),
        "stdlib.io": ioTemplate(),
        "stdlib.math": mathTemplate(),
        "stdlib.containers": containersTemplate(),
        "stdlib.smart-pointers": smartPointersTemplate(),
        "stdlib.concurrency": concurrencyTemplate(),
        "modern-cpp.ranges": rangesTemplate(),
        "modern-cpp.concepts": conceptsTemplate(),
        "modern-cpp.coroutines": coroutinesTemplate(),
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
        "ffi.native": ffiNativeTemplate()
      },
      frameworkTemplates: {
        "boost.asio": boostTemplate(),
        "qt.app": qtTemplate(),
        "embedded.baremetal": embeddedTemplate()
      },
      testTemplates: {
        gtest: unitTemplate()
      }
    });
  }
}

