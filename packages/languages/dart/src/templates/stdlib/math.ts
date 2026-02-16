export function mathTemplate(): string {
  return [
    "import 'dart:math';",
    "",
    "final radius = 3.0;",
    "final area = pi * pow(radius, 2);",
    "print(area.toStringAsFixed(2));"
  ].join("\n");
}
