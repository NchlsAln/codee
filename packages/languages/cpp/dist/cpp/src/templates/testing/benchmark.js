"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
    return "#include <benchmark/benchmark.h>\n\nstatic void BM_Square(benchmark::State& state) {\n  for (auto _ : state) {\n    benchmark::DoNotOptimize(state.iterations());\n  }\n}\n\nBENCHMARK(BM_Square);\nBENCHMARK_MAIN();\n";
}
