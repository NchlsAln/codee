export function protobufTemplate(): string {
  return [
    "import 'package:protobuf/protobuf.dart';",
    "",
    "final msg = User()..id = 1..name = 'Ada';",
    "final bytes = msg.writeToBuffer();",
    "print(bytes.length);"
  ].join("\n");
}
