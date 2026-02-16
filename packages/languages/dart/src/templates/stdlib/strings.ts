export function stringsTemplate(): string {
  return [
    "final raw = '  Dart  ';",
    "final trimmed = raw.trim();",
    "final upper = trimmed.toUpperCase();",
    "final parts = trimmed.split('a');",
    "final interpolated = 'value=$upper';",
    "print(parts);",
    "print(interpolated);"
  ].join("\n");
}
