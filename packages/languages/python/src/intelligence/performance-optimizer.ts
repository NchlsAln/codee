export const performanceOptimizer = {
  overview: "Suggest faster alternatives for Python hotspots.",
  focusAreas: ["vectorization", "jit", "io", "memory"],
  strategies: [
    "Replace Python loops with NumPy/Pandas vectorization",
    "Use PyPy for long-running CPU tasks",
    "Use Numba or Cython for numeric kernels",
    "Batch IO and use async for network waits",
    "Cache expensive computations",
  ],
  signals: ["tight loops", "large lists", "repeated parsing", "slow IO"],
};
