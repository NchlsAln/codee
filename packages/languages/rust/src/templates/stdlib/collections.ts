export function collectionsTemplate(): string {
  return [
    "use std::collections::HashMap;",
    "",
    "let mut counts = HashMap::new();",
    "for word in [\"red\", \"blue\", \"red\"] {",
    "    *counts.entry(word).or_insert(0) += 1;",
    "}",
    "",
    "println!(\"{:?}\", counts);"
  ].join("\n");
}
