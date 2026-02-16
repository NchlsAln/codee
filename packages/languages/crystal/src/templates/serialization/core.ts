export function serializationTemplate(): string {
  return [
    "require \"json\"",
    "require \"msgpack\"",
    "payload = {ok: true}.to_json",
    "io = IO::Memory.new",
    "io.write_bytes(42_i32, IO::ByteFormat::LittleEndian)",
    "packed = payload.to_msgpack",
    "payload; packed"
  ].join("\n");
}
