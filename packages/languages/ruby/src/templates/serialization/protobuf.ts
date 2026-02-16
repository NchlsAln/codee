export function protobufTemplate(): string {
  return [
    "require 'google/protobuf'",
    "user = Example::User.new(id: 1, name: 'Ada')",
    "bytes = Example::User.encode(user)",
    "puts bytes.bytesize"
  ].join("\n");
}
