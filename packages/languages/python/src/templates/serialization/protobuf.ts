export function protobufTemplate(): string {
  return [
    "from example_pb2 import User",
    "",
    "user = User(id=1, email='ada@example.com')",
    "blob = user.SerializeToString()",
    "",
    "restored = User()",
    "restored.ParseFromString(blob)",
    "print(restored.email)"
  ].join("\n");
}
