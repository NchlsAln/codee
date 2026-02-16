export function stringsTemplate(): string {
  return [
    "let raw = \"  Swift  \"",
    "let trimmed = raw.trimmingCharacters(in: .whitespaces)",
    "let upper = trimmed.uppercased()",
    "let parts = trimmed.split(separator: \"i\")",
    "let interpolated = \"value=\\(upper)\"",
    "print(parts)",
    "print(interpolated)"
  ].join("\n");
}
