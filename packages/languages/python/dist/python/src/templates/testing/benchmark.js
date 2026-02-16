"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
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
