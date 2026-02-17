"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numbaKernelsTemplate = numbaKernelsTemplate;
function numbaKernelsTemplate() {
  return [
    "import numpy as np",
    "from numba import njit",
    "",
    "@njit",
    "def kernel(values: np.ndarray) -> float:",
    "    total = 0.0",
    "    for value in values:",
    "        total += value * value",
    "    return total",
    "",
    "values = np.random.rand(100000)",
    "print(kernel(values))",
  ].join("\n");
}
