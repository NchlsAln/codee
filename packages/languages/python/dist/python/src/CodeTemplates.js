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
const mlops_pipelines_1 = require("./templates/ai-ml/mlops-pipelines");
const model_serving_1 = require("./templates/ai-ml/model-serving");
const rag_systems_1 = require("./templates/ai-ml/rag-systems");
const feature_stores_1 = require("./templates/ai-ml/feature-stores");
const qiskit_circuits_1 = require("./templates/quantum/qiskit-circuits");
const quantum_simulators_1 = require("./templates/quantum/quantum-simulators");
const variational_algorithms_1 = require("./templates/quantum/variational-algorithms");
const hybrid_workflows_1 = require("./templates/quantum/hybrid-workflows");
const smart_contract_integration_1 = require("./templates/blockchain/smart-contract-integration");
const event_indexer_1 = require("./templates/blockchain/event-indexer");
const wallet_custody_1 = require("./templates/blockchain/wallet-custody");
const consensus_sim_1 = require("./templates/blockchain/consensus-sim");
const edge_ingestion_1 = require("./templates/iot/edge-ingestion");
const device_firmware_1 = require("./templates/iot/device-firmware");
const digital_twins_1 = require("./templates/iot/digital-twins");
const telemetry_analytics_1 = require("./templates/iot/telemetry-analytics");
const mpi_job_1 = require("./templates/hpc/mpi-job");
const distributed_arrays_1 = require("./templates/hpc/distributed-arrays");
const numba_kernels_1 = require("./templates/hpc/numba-kernels");
const profiling_optimization_1 = require("./templates/hpc/profiling-optimization");
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
        "ai-ml.mlops-pipelines": (0, mlops_pipelines_1.mlopsPipelinesTemplate)(),
        "ai-ml.model-serving": (0, model_serving_1.modelServingTemplate)(),
        "ai-ml.rag-systems": (0, rag_systems_1.ragSystemsTemplate)(),
        "ai-ml.feature-stores": (0, feature_stores_1.featureStoresTemplate)(),
        "quantum.qiskit-circuits": (0, qiskit_circuits_1.qiskitCircuitsTemplate)(),
        "quantum.quantum-simulators": (0, quantum_simulators_1.quantumSimulatorsTemplate)(),
        "quantum.variational-algorithms": (0,
        variational_algorithms_1.variationalAlgorithmsTemplate)(),
        "quantum.hybrid-workflows": (0, hybrid_workflows_1.hybridWorkflowsTemplate)(),
        "blockchain.smart-contract-integration": (0,
        smart_contract_integration_1.smartContractIntegrationTemplate)(),
        "blockchain.event-indexer": (0, event_indexer_1.eventIndexerTemplate)(),
        "blockchain.wallet-custody": (0, wallet_custody_1.walletCustodyTemplate)(),
        "blockchain.consensus-sim": (0, consensus_sim_1.consensusSimulationTemplate)(),
        "iot.edge-ingestion": (0, edge_ingestion_1.edgeIngestionTemplate)(),
        "iot.device-firmware": (0, device_firmware_1.deviceFirmwareTemplate)(),
        "iot.digital-twins": (0, digital_twins_1.digitalTwinsTemplate)(),
        "iot.telemetry-analytics": (0, telemetry_analytics_1.telemetryAnalyticsTemplate)(),
        "hpc.mpi-job": (0, mpi_job_1.mpiJobTemplate)(),
        "hpc.distributed-arrays": (0, distributed_arrays_1.distributedArraysTemplate)(),
        "hpc.numba-kernels": (0, numba_kernels_1.numbaKernelsTemplate)(),
        "hpc.profiling-optimization": (0, profiling_optimization_1.profilingOptimizationTemplate)(),
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
