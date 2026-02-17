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
import { fastApiTemplate } from "./templates/fastapi";
import { djangoTemplate } from "./templates/django";
import { pytorchTemplate } from "./templates/pytorch";
import { pytorchTrainingTemplate } from "./templates/ml-ai/pytorch-training";
import { tensorflowWorkflowTemplate } from "./templates/ml-ai/tensorflow-workflow";
import { huggingfaceTransformersTemplate } from "./templates/ml-ai/huggingface-transformers";
import { dataScienceTemplate } from "./templates/ml-ai/data-science";
import { visualizationTemplate } from "./templates/ml-ai/visualization";
import { mlopsPipelinesTemplate } from "./templates/ai-ml/mlops-pipelines";
import { modelServingTemplate } from "./templates/ai-ml/model-serving";
import { ragSystemsTemplate } from "./templates/ai-ml/rag-systems";
import { featureStoresTemplate } from "./templates/ai-ml/feature-stores";
import { qiskitCircuitsTemplate } from "./templates/quantum/qiskit-circuits";
import { quantumSimulatorsTemplate } from "./templates/quantum/quantum-simulators";
import { variationalAlgorithmsTemplate } from "./templates/quantum/variational-algorithms";
import { hybridWorkflowsTemplate } from "./templates/quantum/hybrid-workflows";
import { smartContractIntegrationTemplate } from "./templates/blockchain/smart-contract-integration";
import { eventIndexerTemplate } from "./templates/blockchain/event-indexer";
import { walletCustodyTemplate } from "./templates/blockchain/wallet-custody";
import { consensusSimulationTemplate } from "./templates/blockchain/consensus-sim";
import { edgeIngestionTemplate } from "./templates/iot/edge-ingestion";
import { deviceFirmwareTemplate } from "./templates/iot/device-firmware";
import { digitalTwinsTemplate } from "./templates/iot/digital-twins";
import { telemetryAnalyticsTemplate } from "./templates/iot/telemetry-analytics";
import { mpiJobTemplate } from "./templates/hpc/mpi-job";
import { distributedArraysTemplate } from "./templates/hpc/distributed-arrays";
import { numbaKernelsTemplate } from "./templates/hpc/numba-kernels";
import { profilingOptimizationTemplate } from "./templates/hpc/profiling-optimization";
import { fastApiAdvancedTemplate } from "./templates/web-async/fastapi-advanced";
import { djangoAsyncTemplate } from "./templates/web-async/django-async";
import { aiohttpPatternsTemplate } from "./templates/web-async/aiohttp-patterns";
import { tornadoLegacyTemplate } from "./templates/web-async/tornado-legacy";
import { cythonExtensionsTemplate } from "./templates/systems/cython-extensions";
import { rustPyo3Template } from "./templates/systems/rust-pyo3";
import { cffiBindingsTemplate } from "./templates/systems/cffi-bindings";
import { subprocessManagementTemplate } from "./templates/systems/subprocess-management";
import { dockerOptimizationTemplate } from "./templates/devops/docker-optimization";
import { kubernetesOperatorsTemplate } from "./templates/devops/kubernetes-operators";
import { cicdPipelinesTemplate } from "./templates/devops/ci-cd-pipelines";
import { monitoringLoggingTemplate } from "./templates/devops/monitoring-logging";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("python", {
      idioms: [
        "Prefer explicit imports.",
        "Follow PEP 8 naming and formatting.",
        "Use type hints for public APIs.",
        "Prefer context managers for resources.",
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
        "ml-ai.pytorch-training": pytorchTrainingTemplate(),
        "ml-ai.tensorflow-workflow": tensorflowWorkflowTemplate(),
        "ml-ai.huggingface-transformers": huggingfaceTransformersTemplate(),
        "ml-ai.data-science": dataScienceTemplate(),
        "ml-ai.visualization": visualizationTemplate(),
        "ai-ml.mlops-pipelines": mlopsPipelinesTemplate(),
        "ai-ml.model-serving": modelServingTemplate(),
        "ai-ml.rag-systems": ragSystemsTemplate(),
        "ai-ml.feature-stores": featureStoresTemplate(),
        "quantum.qiskit-circuits": qiskitCircuitsTemplate(),
        "quantum.quantum-simulators": quantumSimulatorsTemplate(),
        "quantum.variational-algorithms": variationalAlgorithmsTemplate(),
        "quantum.hybrid-workflows": hybridWorkflowsTemplate(),
        "blockchain.smart-contract-integration": smartContractIntegrationTemplate(),
        "blockchain.event-indexer": eventIndexerTemplate(),
        "blockchain.wallet-custody": walletCustodyTemplate(),
        "blockchain.consensus-sim": consensusSimulationTemplate(),
        "iot.edge-ingestion": edgeIngestionTemplate(),
        "iot.device-firmware": deviceFirmwareTemplate(),
        "iot.digital-twins": digitalTwinsTemplate(),
        "iot.telemetry-analytics": telemetryAnalyticsTemplate(),
        "hpc.mpi-job": mpiJobTemplate(),
        "hpc.distributed-arrays": distributedArraysTemplate(),
        "hpc.numba-kernels": numbaKernelsTemplate(),
        "hpc.profiling-optimization": profilingOptimizationTemplate(),
        "web-async.fastapi-advanced": fastApiAdvancedTemplate(),
        "web-async.django-async": djangoAsyncTemplate(),
        "web-async.aiohttp-patterns": aiohttpPatternsTemplate(),
        "web-async.tornado-legacy": tornadoLegacyTemplate(),
        "systems.cython-extensions": cythonExtensionsTemplate(),
        "systems.rust-pyo3": rustPyo3Template(),
        "systems.cffi-bindings": cffiBindingsTemplate(),
        "systems.subprocess-management": subprocessManagementTemplate(),
        "devops.docker-optimization": dockerOptimizationTemplate(),
        "devops.kubernetes-operators": kubernetesOperatorsTemplate(),
        "devops.ci-cd-pipelines": cicdPipelinesTemplate(),
        "devops.monitoring-logging": monitoringLoggingTemplate(),
      },
      frameworkTemplates: {
        "fastapi.endpoint": fastApiTemplate(),
        "django.view": djangoTemplate(),
        "pytorch.training": pytorchTemplate(),
      },
      testTemplates: {
        pytest: unitTemplate(),
      },
    });
  }
}
