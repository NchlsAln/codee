export function binaryTemplate(): string {
  return [
    "payload = Marshal.dump({ id: 1 })",
    "data = Marshal.load(payload)",
    "puts data[:id]"
  ].join("\n");
}
