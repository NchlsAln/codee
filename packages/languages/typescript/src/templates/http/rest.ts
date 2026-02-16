export function httpRestTemplate(): string {
  return [
    "const response = await fetch('https://example.com/items', {",
    "  method: 'POST',",
    "  headers: { 'content-type': 'application/json' },",
    "  body: JSON.stringify({ name: 'widget' })",
    "});",
    "",
    "console.log(await response.json());"
  ].join("\n");
}
