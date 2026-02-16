export function serializationTemplate(): string {
  return [
    "import std/[json, streams]",
    "import msgpack",
    "let payload = %* {\"ok\": true}",
    "discard $payload",
    "var s = newStringStream(\"\")",
    "s.writeInt32(42)",
    "discard msgpack"
  ].join("\n");
}
