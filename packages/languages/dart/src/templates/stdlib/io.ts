export function ioTemplate(): string {
  return [
    "import 'dart:io';",
    "",
    "final file = File('data.txt');",
    "final text = file.readAsStringSync();",
    "file.writeAsStringSync('$text\\nmore');",
    "print(text);"
  ].join("\n");
}
