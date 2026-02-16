export function inferTypeScriptTypes(source: string): string[] {
  const hints = new Set<string>();

  if (source.includes(": ")) {
    hints.add("explicit-types");
  }
  if (source.includes("as const")) {
    hints.add("literal-narrowing");
  }
  if (source.includes("|")) {
    hints.add("union-types");
  }
  if (source.includes("&")) {
    hints.add("intersection-types");
  }
  if (source.includes("extends") && source.includes("?")) {
    hints.add("conditional-types");
  }
  if (source.includes("Record<") || source.includes("keyof")) {
    hints.add("mapped-types");
  }
  if (source.includes("unknown")) {
    hints.add("unknown-type");
  }
  if (source.includes("any")) {
    hints.add("any-type");
  }
  if (source.includes("readonly")) {
    hints.add("readonly-types");
  }
  if (source.includes("infer ")) {
    hints.add("infer-keyword");
  }
  if (source.includes("satisfies")) {
    hints.add("satisfies-operator");
  }

  if (hints.size === 0) {
    hints.add("inferred-types");
  }

  return Array.from(hints);
}
