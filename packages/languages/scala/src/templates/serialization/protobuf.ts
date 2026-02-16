export function protobufTemplate(): string {
  return [
    "import scalapb.GeneratedMessage",
    "import com.example.proto.my.MyMessage",
    "",
    "def encode(message: GeneratedMessage): Array[Byte] = message.toByteArray",
    "val bytes = encode(MyMessage(id = 1))",
    "println(bytes.length)"
  ].join("\n");
}
