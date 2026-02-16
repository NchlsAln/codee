export function protobufTemplate(): string {
  return [
    "import SwiftProtobuf",
    "",
    "var user = My_User()",
    "user.id = 1",
    "user.name = \"Ada\"",
    "let bytes = try user.serializedData()",
    "print(bytes.count)"
  ].join("\n");
}
