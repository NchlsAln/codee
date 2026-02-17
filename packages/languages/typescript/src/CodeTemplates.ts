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
import { reactTemplate } from "./templates/react";
import { nextjsTemplate } from "./templates/nextjs";
import { nestjsTemplate } from "./templates/nestjs";
import { reactAdvancedTemplate } from "./templates/frontend-frameworks/react-advanced";
import { vueCompositionTemplate } from "./templates/frontend-frameworks/vue-composition";
import { svelteKitTemplate } from "./templates/frontend-frameworks/svelte-kit";
import { solidJsTemplate } from "./templates/frontend-frameworks/solid-js";
import { nestjsArchitectureTemplate } from "./templates/backend-api/nestjs-architecture";
import { trpcRoutersTemplate } from "./templates/backend-api/trpc-routers";
import { graphqlCodegenTemplate } from "./templates/backend-api/graphql-codegen";
import { websocketServersTemplate } from "./templates/backend-api/websocket-servers";
import { nextjsAppRouterTemplate } from "./templates/fullstack-meta/nextjs-app-router";
import { remixLoadersTemplate } from "./templates/fullstack-meta/remix-loaders";
import { sveltekitFullstackTemplate } from "./templates/fullstack-meta/sveltekit-fullstack";
import { turborepoPipelinesTemplate } from "./templates/fullstack-meta/turborepo-pipelines";
import { advancedGenericsTemplate } from "./templates/type-system-mastery/advanced-generics";
import { brandTypesTemplate } from "./templates/type-system-mastery/brand-types";
import { stateMachinesTemplate } from "./templates/type-system-mastery/state-machines";
import { apiContractsTemplate } from "./templates/type-system-mastery/api-contracts";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("typescript", {
      idioms: [
        "Prefer type inference when clear.",
        "Use interfaces for public contracts.",
        "Keep functions small and composable.",
        "Prefer unknown over any and narrow safely.",
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
        "frontend-frameworks.react-advanced": reactAdvancedTemplate(),
        "frontend-frameworks.vue-composition": vueCompositionTemplate(),
        "frontend-frameworks.svelte-kit": svelteKitTemplate(),
        "frontend-frameworks.solid-js": solidJsTemplate(),
        "backend-api.nestjs-architecture": nestjsArchitectureTemplate(),
        "backend-api.trpc-routers": trpcRoutersTemplate(),
        "backend-api.graphql-codegen": graphqlCodegenTemplate(),
        "backend-api.websocket-servers": websocketServersTemplate(),
        "fullstack-meta.nextjs-app-router": nextjsAppRouterTemplate(),
        "fullstack-meta.remix-loaders": remixLoadersTemplate(),
        "fullstack-meta.sveltekit-fullstack": sveltekitFullstackTemplate(),
        "fullstack-meta.turborepo-pipelines": turborepoPipelinesTemplate(),
        "type-system-mastery.advanced-generics": advancedGenericsTemplate(),
        "type-system-mastery.brand-types": brandTypesTemplate(),
        "type-system-mastery.state-machines": stateMachinesTemplate(),
        "type-system-mastery.api-contracts": apiContractsTemplate(),
      },
      frameworkTemplates: {
        "react.component": reactTemplate(),
        "next.api": nextjsTemplate(),
        "nestjs.controller": nestjsTemplate(),
      },
      testTemplates: {
        jest: unitTemplate(),
      },
    });
  }
}
