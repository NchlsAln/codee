export function httpClientTemplate(): string {
  return [
    "const response = await fetch('https://example.com/health');",
    "const data = await response.json();",
    "",
    "console.log(data);"
  ].join("\n");
}
