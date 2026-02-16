export function parallelTemplate(): string {
  return [
    "let results = try await withThrowingTaskGroup(of: Int.self) { group in",
    "  for n in [1, 2, 3] {",
    "    group.addTask { n * 2 }",
    "  }",
    "  return try await group.reduce(into: []) { $0.append($1) }",
    "}",
    "print(results)"
  ].join("\n");
}
