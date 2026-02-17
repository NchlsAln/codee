"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mlopsPipelinesTemplate = mlopsPipelinesTemplate;
function mlopsPipelinesTemplate() {
  return [
    "from dataclasses import dataclass",
    "from datetime import datetime",
    "import json",
    "",
    "@dataclass",
    "class ExperimentRun:",
    "    name: str",
    "    metrics: dict",
    "    artifacts: dict",
    "",
    "def log_run(run: ExperimentRun, path: str) -> None:",
    "    payload = {",
    "        'name': run.name,",
    "        'metrics': run.metrics,",
    "        'artifacts': run.artifacts,",
    "        'timestamp': datetime.utcnow().isoformat(),",
    "    }",
    "    with open(path, 'w', encoding='utf-8') as handle:",
    "        json.dump(payload, handle, indent=2)",
    "",
    "run = ExperimentRun(",
    "    name='baseline',",
    "    metrics={'accuracy': 0.92, 'latency_ms': 14.3},",
    "    artifacts={'model': 'models/baseline.pkl', 'data': 'data/train.parquet'},",
    ")",
    "log_run(run, 'runs/baseline.json')",
  ].join("\n");
}
