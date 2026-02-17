export function quantumSimulatorsTemplate(): string {
  return [
    "from qiskit import Aer, QuantumCircuit",
    "",
    "circuit = QuantumCircuit(1)",
    "circuit.x(0)",
    "circuit.measure_all()",
    "",
    "backend = Aer.get_backend('aer_simulator')",
    "job = backend.run(circuit, shots=128)",
    "print(job.result().get_counts())",
  ].join("\n");
}
