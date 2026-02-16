export function jsonTemplate(): string {
  return [
    "import 'dart:convert';",
    "",
    "final user = {'id': 1, 'name': 'Ada'};",
    "final json = jsonEncode(user);",
    "print(json);"
  ].join("\n");
}
