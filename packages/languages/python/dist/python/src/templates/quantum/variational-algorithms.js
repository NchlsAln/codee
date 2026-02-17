"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variationalAlgorithmsTemplate = variationalAlgorithmsTemplate;
function variationalAlgorithmsTemplate() {
  return [
    "import numpy as np",
    "from qiskit import Aer, QuantumCircuit",
    "",
    "def circuit(theta: float) -> QuantumCircuit:",
    "    qc = QuantumCircuit(1)",
    "    qc.ry(theta, 0)",
    "    qc.measure_all()",
    "    return qc",
    "",
    "backend = Aer.get_backend('aer_simulator')",
    "thetas = np.linspace(0, np.pi, 8)",
    "scores = []",
    "for theta in thetas:",
    "    job = backend.run(circuit(theta), shots=128)",
    "    counts = job.result().get_counts()",
    "    score = counts.get('1', 0) / 128.0",
    "    scores.append(score)",
    "print(scores)",
  ].join("\n");
}
