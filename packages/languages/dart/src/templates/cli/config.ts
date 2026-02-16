export function cliConfigTemplate(): string {
  return [
    "import 'dart:convert';",
    "import 'dart:io';",
    "",
    "final json = jsonDecode(File('config.json').readAsStringSync());",
    "print(json['port']);"
  ].join("\n");
}
