export function protobufTemplate(): string {
  return [
    "user = %Example.User{id: 1, name: \"Ada\"}",
    "bytes = Example.User.encode(user)",
    "IO.inspect(byte_size(bytes))"
  ].join("\n");
}
