export function benchmarkTemplate(): string {
  return "#include <benchmark/benchmark.h>\n\nstatic void BM_Square(benchmark::State& state) {\n  for (auto _ : state) {\n    benchmark::DoNotOptimize(state.iterations());\n  }\n}\n\nBENCHMARK(BM_Square);\nBENCHMARK_MAIN();\n";
}
