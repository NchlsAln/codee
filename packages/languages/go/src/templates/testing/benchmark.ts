export function benchmarkTemplate(): string {
  return "package main\n\nimport \"testing\"\n\nfunc BenchmarkSquare(b *testing.B) {\n  for i := 0; i < b.N; i++ {\n    _ = i * i\n  }\n}\n";
}
