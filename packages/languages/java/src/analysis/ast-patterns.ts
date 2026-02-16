export const javaAstPatterns = [
  "class declarations",
  "interface declarations",
  "lambda expressions",
  "stream pipelines",
  "annotations",
  "tree-sitter-java or Eclipse JDT",
  "smell: null checks everywhere (consider Optional)",
  "smell: long methods with deep nesting",
  "perf: boxing in hot loops",
  "perf: parallel stream misuse",
  "security: SQL string concatenation",
  "security: insecure deserialization",
  "refactor: extract method from giant class",
  "refactor: replace duplicated DTOs",
  "idiom: try-with-resources for Closeable",
  "concurrency: synchronized on public lock"
];
