export function hashingTemplate(): string {
  return [
    "hash = :crypto.hash(:sha256, \"secret\")",
    "IO.inspect(Base.encode16(hash))"
  ].join("\n");
}
