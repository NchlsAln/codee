export function propertyTemplate(): string {
  return [
    "import 'package:glados/glados.dart';",
    "",
    "void main() {",
    "  Glados2<int, int>().test('add commutes', (a, b) {",
    "    return a + b == b + a;",
    "  });",
    "}"
  ].join("\n");
}
