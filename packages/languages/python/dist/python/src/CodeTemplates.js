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
const fastapi_1 = require("./templates/fastapi");
const django_1 = require("./templates/django");
const pytorch_1 = require("./templates/pytorch");
const pytorch_training_1 = require("./templates/ml-ai/pytorch-training");
const tensorflow_workflow_1 = require("./templates/ml-ai/tensorflow-workflow");
const huggingface_transformers_1 = require("./templates/ml-ai/huggingface-transformers");
const data_science_1 = require("./templates/ml-ai/data-science");
const visualization_1 = require("./templates/ml-ai/visualization");
const fastapi_advanced_1 = require("./templates/web-async/fastapi-advanced");
const django_async_1 = require("./templates/web-async/django-async");
const aiohttp_patterns_1 = require("./templates/web-async/aiohttp-patterns");
const tornado_legacy_1 = require("./templates/web-async/tornado-legacy");
const cython_extensions_1 = require("./templates/systems/cython-extensions");
const rust_pyo3_1 = require("./templates/systems/rust-pyo3");
const cffi_bindings_1 = require("./templates/systems/cffi-bindings");
const subprocess_management_1 = require("./templates/systems/subprocess-management");
const docker_optimization_1 = require("./templates/devops/docker-optimization");
const kubernetes_operators_1 = require("./templates/devops/kubernetes-operators");
const ci_cd_pipelines_1 = require("./templates/devops/ci-cd-pipelines");
const monitoring_logging_1 = require("./templates/devops/monitoring-logging");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
  constructor() {
    super("python", {
      idioms: [
        "Prefer explicit imports.",
        "Follow PEP 8 naming and formatting.",
        "Use type hints for public APIs.",
        "Prefer context managers for resources.",
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
        "ml-ai.pytorch-training": (0, pytorch_training_1.pytorchTrainingTemplate)(),
        "ml-ai.tensorflow-workflow": (0, tensorflow_workflow_1.tensorflowWorkflowTemplate)(),
        "ml-ai.huggingface-transformers": (0,
        huggingface_transformers_1.huggingfaceTransformersTemplate)(),
        "ml-ai.data-science": (0, data_science_1.dataScienceTemplate)(),
        "ml-ai.visualization": (0, visualization_1.visualizationTemplate)(),
        "web-async.fastapi-advanced": (0, fastapi_advanced_1.fastApiAdvancedTemplate)(),
        "web-async.django-async": (0, django_async_1.djangoAsyncTemplate)(),
        "web-async.aiohttp-patterns": (0, aiohttp_patterns_1.aiohttpPatternsTemplate)(),
        "web-async.tornado-legacy": (0, tornado_legacy_1.tornadoLegacyTemplate)(),
        "systems.cython-extensions": (0, cython_extensions_1.cythonExtensionsTemplate)(),
        "systems.rust-pyo3": (0, rust_pyo3_1.rustPyo3Template)(),
        "systems.cffi-bindings": (0, cffi_bindings_1.cffiBindingsTemplate)(),
        "systems.subprocess-management": (0,
        subprocess_management_1.subprocessManagementTemplate)(),
        "devops.docker-optimization": (0, docker_optimization_1.dockerOptimizationTemplate)(),
        "devops.kubernetes-operators": (0, kubernetes_operators_1.kubernetesOperatorsTemplate)(),
        "devops.ci-cd-pipelines": (0, ci_cd_pipelines_1.cicdPipelinesTemplate)(),
        "devops.monitoring-logging": (0, monitoring_logging_1.monitoringLoggingTemplate)(),
      },
      frameworkTemplates: {
        "fastapi.endpoint": (0, fastapi_1.fastApiTemplate)(),
        "django.view": (0, django_1.djangoTemplate)(),
        "pytorch.training": (0, pytorch_1.pytorchTemplate)(),
      },
      testTemplates: {
        pytest: (0, unit_1.unitTemplate)(),
      },
    });
  }
}
exports.CodeTemplates = CodeTemplates;
