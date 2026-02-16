export function mockTemplate(): string {
  return [
    "import 'package:mocktail/mocktail.dart';",
    "import 'package:test/test.dart';",
    "",
    "class Repo { String get(int id) => 'x'; }",
    "class MockRepo extends Mock implements Repo {}",
    "",
    "void main() {",
    "  final repo = MockRepo();",
    "  when(() => repo.get(any())).thenReturn('ok');",
    "  expect(repo.get(1), 'ok');",
    "}"
  ].join("\n");
}
