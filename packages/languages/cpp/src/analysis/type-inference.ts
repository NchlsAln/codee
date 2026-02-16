export function inferCppTypes(source: string): string[] {
  const hints = new Set<string>();
  if (source.includes("auto ")) {
    hints.add("auto-deduction");
  }
  if (source.includes("decltype")) {
    hints.add("decltype");
  }
  if (source.includes("std::vector") || source.includes("std::unordered_map")) {
    hints.add("template-types");
  }
  if (source.includes("constexpr")) {
    hints.add("constexpr");
  }
  if (source.includes("concept ") || source.includes("requires")) {
    hints.add("concepts");
  }
  if (source.includes("std::optional")) {
    hints.add("optional");
  }
  if (source.includes("std::variant")) {
    hints.add("sum-types");
  }

  if (hints.size === 0) {
    hints.add("explicit-types");
  }

  return Array.from(hints);
}
