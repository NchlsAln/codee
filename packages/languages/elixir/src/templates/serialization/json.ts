export function jsonTemplate(): string {
  return [
    "payload = %{id: 1, name: \"Ada\"}",
    "json = Jason.encode!(payload)",
    "data = Jason.decode!(json)",
    "IO.inspect(data)"
  ].join("\n");
}
