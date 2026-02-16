export function actorsTemplate(): string {
  return [
    "actor Counter {",
    "  private var value = 0",
    "  func inc() { value += 1 }",
    "  func get() -> Int { value }",
    "}",
    "",
    "let counter = Counter()",
    "await counter.inc()",
    "print(await counter.get())"
  ].join("\n");
}
