"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitoringLoggingTemplate =
  exports.cicdPipelinesTemplate =
  exports.kubernetesOperatorsTemplate =
  exports.dockerOptimizationTemplate =
  exports.subprocessManagementTemplate =
  exports.cffiBindingsTemplate =
  exports.rustPyo3Template =
  exports.cythonExtensionsTemplate =
  exports.tornadoLegacyTemplate =
  exports.aiohttpPatternsTemplate =
  exports.djangoAsyncTemplate =
  exports.fastApiAdvancedTemplate =
  exports.profilingOptimizationTemplate =
  exports.numbaKernelsTemplate =
  exports.distributedArraysTemplate =
  exports.mpiJobTemplate =
  exports.telemetryAnalyticsTemplate =
  exports.digitalTwinsTemplate =
  exports.deviceFirmwareTemplate =
  exports.edgeIngestionTemplate =
  exports.consensusSimulationTemplate =
  exports.walletCustodyTemplate =
  exports.eventIndexerTemplate =
  exports.smartContractIntegrationTemplate =
  exports.hybridWorkflowsTemplate =
  exports.variationalAlgorithmsTemplate =
  exports.quantumSimulatorsTemplate =
  exports.qiskitCircuitsTemplate =
  exports.featureStoresTemplate =
  exports.ragSystemsTemplate =
  exports.modelServingTemplate =
  exports.mlopsPipelinesTemplate =
  exports.visualizationTemplate =
  exports.dataScienceTemplate =
  exports.huggingfaceTransformersTemplate =
  exports.tensorflowWorkflowTemplate =
  exports.pytorchTrainingTemplate =
  exports.pytorchTemplate =
  exports.fastApiTemplate =
  exports.djangoTemplate =
  exports.inferPythonTypes =
  exports.pythonAstPatterns =
  exports.pythonIdioms =
  exports.pythonEcosystem =
  exports.pythonRuntime =
  exports.PromptEngineering =
  exports.CodeTemplates =
  exports.LanguageServer =
  exports.LanguageAnalyzer =
  exports.pythonDefinition =
    void 0;
exports.hpcOptimizer =
  exports.iotArchitect =
  exports.blockchainIntegrator =
  exports.quantumAdvisor =
  exports.aiMlArchitect =
  exports.refactoringEngine =
  exports.modernizationGuide =
  exports.securityAuditor =
  exports.performanceOptimizer =
    void 0;
const LanguageAnalyzer_1 = require("./LanguageAnalyzer");
Object.defineProperty(exports, "LanguageAnalyzer", {
  enumerable: true,
  get: function () {
    return LanguageAnalyzer_1.LanguageAnalyzer;
  },
});
const LanguageServer_1 = require("./LanguageServer");
Object.defineProperty(exports, "LanguageServer", {
  enumerable: true,
  get: function () {
    return LanguageServer_1.LanguageServer;
  },
});
const CodeTemplates_1 = require("./CodeTemplates");
Object.defineProperty(exports, "CodeTemplates", {
  enumerable: true,
  get: function () {
    return CodeTemplates_1.CodeTemplates;
  },
});
const PromptEngineering_1 = require("./PromptEngineering");
Object.defineProperty(exports, "PromptEngineering", {
  enumerable: true,
  get: function () {
    return PromptEngineering_1.PromptEngineering;
  },
});
exports.pythonDefinition = {
  id: "python",
  name: "Python",
  extensions: [".py"],
  serverFactory: (projectPath) => new LanguageServer_1.LanguageServer(projectPath),
  analyzerFactory: () => new LanguageAnalyzer_1.LanguageAnalyzer(),
  templates: new CodeTemplates_1.CodeTemplates(),
  promptEngineering: new PromptEngineering_1.PromptEngineering(),
};
var runtime_1 = require("./implementation/runtime");
Object.defineProperty(exports, "pythonRuntime", {
  enumerable: true,
  get: function () {
    return runtime_1.pythonRuntime;
  },
});
var ecosystem_1 = require("./implementation/ecosystem");
Object.defineProperty(exports, "pythonEcosystem", {
  enumerable: true,
  get: function () {
    return ecosystem_1.pythonEcosystem;
  },
});
var idioms_1 = require("./implementation/idioms");
Object.defineProperty(exports, "pythonIdioms", {
  enumerable: true,
  get: function () {
    return idioms_1.pythonIdioms;
  },
});
var ast_patterns_1 = require("./analysis/ast-patterns");
Object.defineProperty(exports, "pythonAstPatterns", {
  enumerable: true,
  get: function () {
    return ast_patterns_1.pythonAstPatterns;
  },
});
var type_inference_1 = require("./analysis/type-inference");
Object.defineProperty(exports, "inferPythonTypes", {
  enumerable: true,
  get: function () {
    return type_inference_1.inferPythonTypes;
  },
});
var django_1 = require("./templates/django");
Object.defineProperty(exports, "djangoTemplate", {
  enumerable: true,
  get: function () {
    return django_1.djangoTemplate;
  },
});
var fastapi_1 = require("./templates/fastapi");
Object.defineProperty(exports, "fastApiTemplate", {
  enumerable: true,
  get: function () {
    return fastapi_1.fastApiTemplate;
  },
});
var pytorch_1 = require("./templates/pytorch");
Object.defineProperty(exports, "pytorchTemplate", {
  enumerable: true,
  get: function () {
    return pytorch_1.pytorchTemplate;
  },
});
var pytorch_training_1 = require("./templates/ml-ai/pytorch-training");
Object.defineProperty(exports, "pytorchTrainingTemplate", {
  enumerable: true,
  get: function () {
    return pytorch_training_1.pytorchTrainingTemplate;
  },
});
var tensorflow_workflow_1 = require("./templates/ml-ai/tensorflow-workflow");
Object.defineProperty(exports, "tensorflowWorkflowTemplate", {
  enumerable: true,
  get: function () {
    return tensorflow_workflow_1.tensorflowWorkflowTemplate;
  },
});
var huggingface_transformers_1 = require("./templates/ml-ai/huggingface-transformers");
Object.defineProperty(exports, "huggingfaceTransformersTemplate", {
  enumerable: true,
  get: function () {
    return huggingface_transformers_1.huggingfaceTransformersTemplate;
  },
});
var data_science_1 = require("./templates/ml-ai/data-science");
Object.defineProperty(exports, "dataScienceTemplate", {
  enumerable: true,
  get: function () {
    return data_science_1.dataScienceTemplate;
  },
});
var visualization_1 = require("./templates/ml-ai/visualization");
Object.defineProperty(exports, "visualizationTemplate", {
  enumerable: true,
  get: function () {
    return visualization_1.visualizationTemplate;
  },
});
var mlops_pipelines_1 = require("./templates/ai-ml/mlops-pipelines");
Object.defineProperty(exports, "mlopsPipelinesTemplate", {
  enumerable: true,
  get: function () {
    return mlops_pipelines_1.mlopsPipelinesTemplate;
  },
});
var model_serving_1 = require("./templates/ai-ml/model-serving");
Object.defineProperty(exports, "modelServingTemplate", {
  enumerable: true,
  get: function () {
    return model_serving_1.modelServingTemplate;
  },
});
var rag_systems_1 = require("./templates/ai-ml/rag-systems");
Object.defineProperty(exports, "ragSystemsTemplate", {
  enumerable: true,
  get: function () {
    return rag_systems_1.ragSystemsTemplate;
  },
});
var feature_stores_1 = require("./templates/ai-ml/feature-stores");
Object.defineProperty(exports, "featureStoresTemplate", {
  enumerable: true,
  get: function () {
    return feature_stores_1.featureStoresTemplate;
  },
});
var qiskit_circuits_1 = require("./templates/quantum/qiskit-circuits");
Object.defineProperty(exports, "qiskitCircuitsTemplate", {
  enumerable: true,
  get: function () {
    return qiskit_circuits_1.qiskitCircuitsTemplate;
  },
});
var quantum_simulators_1 = require("./templates/quantum/quantum-simulators");
Object.defineProperty(exports, "quantumSimulatorsTemplate", {
  enumerable: true,
  get: function () {
    return quantum_simulators_1.quantumSimulatorsTemplate;
  },
});
var variational_algorithms_1 = require("./templates/quantum/variational-algorithms");
Object.defineProperty(exports, "variationalAlgorithmsTemplate", {
  enumerable: true,
  get: function () {
    return variational_algorithms_1.variationalAlgorithmsTemplate;
  },
});
var hybrid_workflows_1 = require("./templates/quantum/hybrid-workflows");
Object.defineProperty(exports, "hybridWorkflowsTemplate", {
  enumerable: true,
  get: function () {
    return hybrid_workflows_1.hybridWorkflowsTemplate;
  },
});
var smart_contract_integration_1 = require("./templates/blockchain/smart-contract-integration");
Object.defineProperty(exports, "smartContractIntegrationTemplate", {
  enumerable: true,
  get: function () {
    return smart_contract_integration_1.smartContractIntegrationTemplate;
  },
});
var event_indexer_1 = require("./templates/blockchain/event-indexer");
Object.defineProperty(exports, "eventIndexerTemplate", {
  enumerable: true,
  get: function () {
    return event_indexer_1.eventIndexerTemplate;
  },
});
var wallet_custody_1 = require("./templates/blockchain/wallet-custody");
Object.defineProperty(exports, "walletCustodyTemplate", {
  enumerable: true,
  get: function () {
    return wallet_custody_1.walletCustodyTemplate;
  },
});
var consensus_sim_1 = require("./templates/blockchain/consensus-sim");
Object.defineProperty(exports, "consensusSimulationTemplate", {
  enumerable: true,
  get: function () {
    return consensus_sim_1.consensusSimulationTemplate;
  },
});
var edge_ingestion_1 = require("./templates/iot/edge-ingestion");
Object.defineProperty(exports, "edgeIngestionTemplate", {
  enumerable: true,
  get: function () {
    return edge_ingestion_1.edgeIngestionTemplate;
  },
});
var device_firmware_1 = require("./templates/iot/device-firmware");
Object.defineProperty(exports, "deviceFirmwareTemplate", {
  enumerable: true,
  get: function () {
    return device_firmware_1.deviceFirmwareTemplate;
  },
});
var digital_twins_1 = require("./templates/iot/digital-twins");
Object.defineProperty(exports, "digitalTwinsTemplate", {
  enumerable: true,
  get: function () {
    return digital_twins_1.digitalTwinsTemplate;
  },
});
var telemetry_analytics_1 = require("./templates/iot/telemetry-analytics");
Object.defineProperty(exports, "telemetryAnalyticsTemplate", {
  enumerable: true,
  get: function () {
    return telemetry_analytics_1.telemetryAnalyticsTemplate;
  },
});
var mpi_job_1 = require("./templates/hpc/mpi-job");
Object.defineProperty(exports, "mpiJobTemplate", {
  enumerable: true,
  get: function () {
    return mpi_job_1.mpiJobTemplate;
  },
});
var distributed_arrays_1 = require("./templates/hpc/distributed-arrays");
Object.defineProperty(exports, "distributedArraysTemplate", {
  enumerable: true,
  get: function () {
    return distributed_arrays_1.distributedArraysTemplate;
  },
});
var numba_kernels_1 = require("./templates/hpc/numba-kernels");
Object.defineProperty(exports, "numbaKernelsTemplate", {
  enumerable: true,
  get: function () {
    return numba_kernels_1.numbaKernelsTemplate;
  },
});
var profiling_optimization_1 = require("./templates/hpc/profiling-optimization");
Object.defineProperty(exports, "profilingOptimizationTemplate", {
  enumerable: true,
  get: function () {
    return profiling_optimization_1.profilingOptimizationTemplate;
  },
});
var fastapi_advanced_1 = require("./templates/web-async/fastapi-advanced");
Object.defineProperty(exports, "fastApiAdvancedTemplate", {
  enumerable: true,
  get: function () {
    return fastapi_advanced_1.fastApiAdvancedTemplate;
  },
});
var django_async_1 = require("./templates/web-async/django-async");
Object.defineProperty(exports, "djangoAsyncTemplate", {
  enumerable: true,
  get: function () {
    return django_async_1.djangoAsyncTemplate;
  },
});
var aiohttp_patterns_1 = require("./templates/web-async/aiohttp-patterns");
Object.defineProperty(exports, "aiohttpPatternsTemplate", {
  enumerable: true,
  get: function () {
    return aiohttp_patterns_1.aiohttpPatternsTemplate;
  },
});
var tornado_legacy_1 = require("./templates/web-async/tornado-legacy");
Object.defineProperty(exports, "tornadoLegacyTemplate", {
  enumerable: true,
  get: function () {
    return tornado_legacy_1.tornadoLegacyTemplate;
  },
});
var cython_extensions_1 = require("./templates/systems/cython-extensions");
Object.defineProperty(exports, "cythonExtensionsTemplate", {
  enumerable: true,
  get: function () {
    return cython_extensions_1.cythonExtensionsTemplate;
  },
});
var rust_pyo3_1 = require("./templates/systems/rust-pyo3");
Object.defineProperty(exports, "rustPyo3Template", {
  enumerable: true,
  get: function () {
    return rust_pyo3_1.rustPyo3Template;
  },
});
var cffi_bindings_1 = require("./templates/systems/cffi-bindings");
Object.defineProperty(exports, "cffiBindingsTemplate", {
  enumerable: true,
  get: function () {
    return cffi_bindings_1.cffiBindingsTemplate;
  },
});
var subprocess_management_1 = require("./templates/systems/subprocess-management");
Object.defineProperty(exports, "subprocessManagementTemplate", {
  enumerable: true,
  get: function () {
    return subprocess_management_1.subprocessManagementTemplate;
  },
});
var docker_optimization_1 = require("./templates/devops/docker-optimization");
Object.defineProperty(exports, "dockerOptimizationTemplate", {
  enumerable: true,
  get: function () {
    return docker_optimization_1.dockerOptimizationTemplate;
  },
});
var kubernetes_operators_1 = require("./templates/devops/kubernetes-operators");
Object.defineProperty(exports, "kubernetesOperatorsTemplate", {
  enumerable: true,
  get: function () {
    return kubernetes_operators_1.kubernetesOperatorsTemplate;
  },
});
var ci_cd_pipelines_1 = require("./templates/devops/ci-cd-pipelines");
Object.defineProperty(exports, "cicdPipelinesTemplate", {
  enumerable: true,
  get: function () {
    return ci_cd_pipelines_1.cicdPipelinesTemplate;
  },
});
var monitoring_logging_1 = require("./templates/devops/monitoring-logging");
Object.defineProperty(exports, "monitoringLoggingTemplate", {
  enumerable: true,
  get: function () {
    return monitoring_logging_1.monitoringLoggingTemplate;
  },
});
var performance_optimizer_1 = require("./intelligence/performance-optimizer");
Object.defineProperty(exports, "performanceOptimizer", {
  enumerable: true,
  get: function () {
    return performance_optimizer_1.performanceOptimizer;
  },
});
var security_auditor_1 = require("./intelligence/security-auditor");
Object.defineProperty(exports, "securityAuditor", {
  enumerable: true,
  get: function () {
    return security_auditor_1.securityAuditor;
  },
});
var modernization_guide_1 = require("./intelligence/modernization-guide");
Object.defineProperty(exports, "modernizationGuide", {
  enumerable: true,
  get: function () {
    return modernization_guide_1.modernizationGuide;
  },
});
var refactoring_engine_1 = require("./intelligence/refactoring-engine");
Object.defineProperty(exports, "refactoringEngine", {
  enumerable: true,
  get: function () {
    return refactoring_engine_1.refactoringEngine;
  },
});
var ai_ml_architect_1 = require("./intelligence/ai-ml-architect");
Object.defineProperty(exports, "aiMlArchitect", {
  enumerable: true,
  get: function () {
    return ai_ml_architect_1.aiMlArchitect;
  },
});
var quantum_advisor_1 = require("./intelligence/quantum-advisor");
Object.defineProperty(exports, "quantumAdvisor", {
  enumerable: true,
  get: function () {
    return quantum_advisor_1.quantumAdvisor;
  },
});
var blockchain_integrator_1 = require("./intelligence/blockchain-integrator");
Object.defineProperty(exports, "blockchainIntegrator", {
  enumerable: true,
  get: function () {
    return blockchain_integrator_1.blockchainIntegrator;
  },
});
var iot_architect_1 = require("./intelligence/iot-architect");
Object.defineProperty(exports, "iotArchitect", {
  enumerable: true,
  get: function () {
    return iot_architect_1.iotArchitect;
  },
});
var hpc_optimizer_1 = require("./intelligence/hpc-optimizer");
Object.defineProperty(exports, "hpcOptimizer", {
  enumerable: true,
  get: function () {
    return hpc_optimizer_1.hpcOptimizer;
  },
});
