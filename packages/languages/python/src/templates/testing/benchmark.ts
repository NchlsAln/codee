export function benchmarkTemplate(): string {
  return [
    "import timeit",
    "",
    "def work() -> None:",
    "    _ = [i * i for i in range(1000)]",
    "",
    "elapsed = timeit.timeit(work, number=1000)",
    "print(elapsed)"
  ].join("\n");
}
