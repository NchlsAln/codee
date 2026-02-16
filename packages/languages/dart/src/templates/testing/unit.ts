export function unitTemplate(): string {
  return [
    "import 'package:test/test.dart';",
    "",
    "void main() {",
    "  test('add', () {",
    "    expect(1 + 1, equals(2));",
    "  });",
    "}"
  ].join("\n");
}
