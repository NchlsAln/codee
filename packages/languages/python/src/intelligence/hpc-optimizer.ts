export const hpcOptimizer = {
  overview: "Optimize Python for high-performance workloads and clusters.",
  focusAreas: ["mpi", "vectorization", "jit", "profiling"],
  strategies: [
    "Distribute work with MPI or Dask",
    "Use NumPy and Numba for hot kernels",
    "Pin memory layouts for cache locality",
    "Profile with cProfile and line_profiler",
  ],
  signals: ["slow kernels", "serialization overhead", "imbalanced workloads"],
};
