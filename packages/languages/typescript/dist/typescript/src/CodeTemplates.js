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
const react_1 = require("./templates/react");
const nextjs_1 = require("./templates/nextjs");
const nestjs_1 = require("./templates/nestjs");
const react_advanced_1 = require("./templates/frontend-frameworks/react-advanced");
const vue_composition_1 = require("./templates/frontend-frameworks/vue-composition");
const svelte_kit_1 = require("./templates/frontend-frameworks/svelte-kit");
const solid_js_1 = require("./templates/frontend-frameworks/solid-js");
const nestjs_architecture_1 = require("./templates/backend-api/nestjs-architecture");
const trpc_routers_1 = require("./templates/backend-api/trpc-routers");
const graphql_codegen_1 = require("./templates/backend-api/graphql-codegen");
const websocket_servers_1 = require("./templates/backend-api/websocket-servers");
const nextjs_app_router_1 = require("./templates/fullstack-meta/nextjs-app-router");
const remix_loaders_1 = require("./templates/fullstack-meta/remix-loaders");
const sveltekit_fullstack_1 = require("./templates/fullstack-meta/sveltekit-fullstack");
const turborepo_pipelines_1 = require("./templates/fullstack-meta/turborepo-pipelines");
const advanced_generics_1 = require("./templates/type-system-mastery/advanced-generics");
const brand_types_1 = require("./templates/type-system-mastery/brand-types");
const state_machines_1 = require("./templates/type-system-mastery/state-machines");
const api_contracts_1 = require("./templates/type-system-mastery/api-contracts");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
  constructor() {
    super("typescript", {
      idioms: [
        "Prefer type inference when clear.",
        "Use interfaces for public contracts.",
        "Keep functions small and composable.",
        "Prefer unknown over any and narrow safely.",
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
        "frontend-frameworks.react-advanced": (0, react_advanced_1.reactAdvancedTemplate)(),
        "frontend-frameworks.vue-composition": (0, vue_composition_1.vueCompositionTemplate)(),
        "frontend-frameworks.svelte-kit": (0, svelte_kit_1.svelteKitTemplate)(),
        "frontend-frameworks.solid-js": (0, solid_js_1.solidJsTemplate)(),
        "backend-api.nestjs-architecture": (0, nestjs_architecture_1.nestjsArchitectureTemplate)(),
        "backend-api.trpc-routers": (0, trpc_routers_1.trpcRoutersTemplate)(),
        "backend-api.graphql-codegen": (0, graphql_codegen_1.graphqlCodegenTemplate)(),
        "backend-api.websocket-servers": (0, websocket_servers_1.websocketServersTemplate)(),
        "fullstack-meta.nextjs-app-router": (0, nextjs_app_router_1.nextjsAppRouterTemplate)(),
        "fullstack-meta.remix-loaders": (0, remix_loaders_1.remixLoadersTemplate)(),
        "fullstack-meta.sveltekit-fullstack": (0,
        sveltekit_fullstack_1.sveltekitFullstackTemplate)(),
        "fullstack-meta.turborepo-pipelines": (0,
        turborepo_pipelines_1.turborepoPipelinesTemplate)(),
        "type-system-mastery.advanced-generics": (0,
        advanced_generics_1.advancedGenericsTemplate)(),
        "type-system-mastery.brand-types": (0, brand_types_1.brandTypesTemplate)(),
        "type-system-mastery.state-machines": (0, state_machines_1.stateMachinesTemplate)(),
        "type-system-mastery.api-contracts": (0, api_contracts_1.apiContractsTemplate)(),
      },
      frameworkTemplates: {
        "react.component": (0, react_1.reactTemplate)(),
        "next.api": (0, nextjs_1.nextjsTemplate)(),
        "nestjs.controller": (0, nestjs_1.nestjsTemplate)(),
      },
      testTemplates: {
        jest: (0, unit_1.unitTemplate)(),
      },
    });
  }
}
exports.CodeTemplates = CodeTemplates;
