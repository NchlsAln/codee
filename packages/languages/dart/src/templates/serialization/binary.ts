export function binaryTemplate(): string {
  return [
    "import 'package:msgpack_dart/msgpack_dart.dart';",
    "",
    "final bytes = serialize([1, 2, 3]);",
    "final data = deserialize(bytes);",
    "print(data);"
  ].join("\n");
}
