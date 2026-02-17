"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hybridWorkflowsTemplate = hybridWorkflowsTemplate;
function hybridWorkflowsTemplate() {
  return [
    "import numpy as np",
    "from qiskit import Aer, QuantumCircuit",
    "",
    "backend = Aer.get_backend('aer_simulator')",
    "",
    "def objective(theta: float) -> float:",
    "    qc = QuantumCircuit(1)",
    "    qc.ry(theta, 0)",
    "    qc.measure_all()",
    "    counts = backend.run(qc, shots=256).result().get_counts()",
    "    return counts.get('1', 0) / 256.0",
    "",
    "thetas = np.linspace(0, np.pi, 16)",
    "best = max(thetas, key=objective)",
    "print('best theta', best)",
  ].join("\n");
}
