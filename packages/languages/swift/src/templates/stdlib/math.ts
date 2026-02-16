export function mathTemplate(): string {
  return [
    "import Foundation",
    "",
    "let radius = 3.0",
    "let area = Double.pi * pow(radius, 2)",
    "let rounded = String(format: \"%.2f\", area)",
    "print(rounded)"
  ].join("\n");
}
