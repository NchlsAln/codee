export function profilingOptimizationTemplate(): string {
  return [
    "import cProfile",
    "import pstats",
    "",
    "def workload() -> None:",
    "    total = 0",
    "    for idx in range(10000):",
    "        total += idx * idx",
    "    print(total)",
    "",
    "with cProfile.Profile() as profiler:",
    "    workload()",
    "stats = pstats.Stats(profiler).sort_stats('cumulative')",
    "stats.print_stats(5)",
  ].join("\n");
}
