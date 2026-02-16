export function hashingTemplate(): string {
  return [
    "import 'package:crypto/crypto.dart';",
    "import 'dart:convert';",
    "",
    "final bytes = sha256.convert(utf8.encode('secret')).bytes;",
    "print(bytes.length);"
  ].join("\n");
}
