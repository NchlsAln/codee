export function inferRustTypes(source: string): string[] {
  const hints = new Set<string>();

  if (source.includes(": ")) {
    hints.add("explicit-types");
  }
  if (source.includes("impl Trait") || source.includes("dyn ")) {
    hints.add("trait-objects");
  }
  if (source.includes("<")) {
    hints.add("generics");
  }
  if (source.includes("'")) {
    hints.add("lifetimes");
  }
  if (source.includes("::")) {
    hints.add("turbofish");
  }
  if (source.includes("where")) {
    hints.add("where-clauses");
  }
  if (source.includes("Box<") || source.includes("Arc<")) {
    hints.add("heap-ownership");
  }
  if (source.includes("Option<") || source.includes("Result<")) {
    hints.add("sum-types");
  }

  if (hints.size === 0) {
    hints.add("inferred-types");
  }

  return Array.from(hints);
}
