export function qiskitCircuitsTemplate(): string {
  return [
    "from qiskit import Aer, QuantumCircuit, transpile",
    "",
    "circuit = QuantumCircuit(2)",
    "circuit.h(0)",
    "circuit.cx(0, 1)",
    "circuit.measure_all()",
    "",
    "backend = Aer.get_backend('aer_simulator')",
    "compiled = transpile(circuit, backend)",
    "result = backend.run(compiled, shots=256).result()",
    "print(result.get_counts())",
  ].join("\n");
}
