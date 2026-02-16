import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { stringsTemplate } from "./templates/stdlib/strings";
import { ioTemplate } from "./templates/stdlib/io";
import { mathTemplate } from "./templates/stdlib/math";
import { routingTemplate } from "./templates/web/routing";
import { controllerTemplate } from "./templates/web/controllers";
import { middlewareTemplate } from "./templates/web/middleware";
import { websocketsTemplate } from "./templates/web/websockets";
import { ormTemplate } from "./templates/database/orm";
import { migrationsTemplate } from "./templates/database/migrations";
import { queriesTemplate } from "./templates/database/queries";
import { connectionsTemplate } from "./templates/database/connections";
import { asyncTemplate } from "./templates/concurrency/async";
import { actorsTemplate } from "./templates/concurrency/actors";
import { channelsTemplate } from "./templates/concurrency/channels";
import { supervisionTemplate } from "./templates/concurrency/supervision";
import { unitTemplate } from "./templates/testing/unit";
import { integrationTemplate } from "./templates/testing/integration";
import { propertyTemplate } from "./templates/testing/property";
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
import { jwtTemplate } from "./templates/crypto/jwt";
import { encryptionTemplate } from "./templates/crypto/encryption";
import { ffiCTemplate } from "./templates/ffi/c";
import { ffiWasmTemplate } from "./templates/ffi/wasm";
import { ffiNativeTemplate } from "./templates/ffi/native";
import { railsControllerTemplate } from "./templates/web-frameworks/rails-controller";
import { sinatraRouteTemplate } from "./templates/web-frameworks/sinatra-route";
import { grapeApiTemplate } from "./templates/web-frameworks/grape-api";
import { sidekiqWorkerTemplate } from "./templates/web-frameworks/sidekiq-worker";
import { rspecTemplate } from "./templates/testing/rspec";
import { activeRecordModelTemplate } from "./templates/database/active-record";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ruby", {
      idioms: ["Prefer idiomatic Ruby.", "Use blocks and enumerables."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringsTemplate(),
        "stdlib.io": ioTemplate(),
        "stdlib.math": mathTemplate(),
        "web.routing": routingTemplate(),
        "web.controllers": controllerTemplate(),
        "web.middleware": middlewareTemplate(),
        "web.websockets": websocketsTemplate(),
        "database.orm": ormTemplate(),
        "database.migrations": migrationsTemplate(),
        "database.queries": queriesTemplate(),
        "database.connections": connectionsTemplate(),
        "concurrency.async": asyncTemplate(),
        "concurrency.actors": actorsTemplate(),
        "concurrency.channels": channelsTemplate(),
        "concurrency.supervision": supervisionTemplate(),
        "testing.unit": unitTemplate(),
        "testing.integration": integrationTemplate(),
        "testing.property": propertyTemplate(),
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
        "crypto.jwt": jwtTemplate(),
        "crypto.encryption": encryptionTemplate(),
        "ffi.c": ffiCTemplate(),
        "ffi.wasm": ffiWasmTemplate(),
        "ffi.native": ffiNativeTemplate()
      },
      frameworkTemplates: {
        "web.rails.controller": railsControllerTemplate(),
        "web.sinatra.route": sinatraRouteTemplate(),
        "web.grape.api": grapeApiTemplate(),
        "web.sidekiq.worker": sidekiqWorkerTemplate(),
        "database.active_record": activeRecordModelTemplate()
      },
      testTemplates: {
        rspec: rspecTemplate()
      }
    });
  }
}

