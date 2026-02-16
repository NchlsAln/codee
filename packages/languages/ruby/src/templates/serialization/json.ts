export function jsonTemplate(): string {
  return [
    "require 'json'",
    "payload = { id: 1, name: 'Ada' }",
    "json = JSON.generate(payload)",
    "data = JSON.parse(json)",
    "puts data['name']"
  ].join("\n");
}
