export function httpRestTemplate(): string {
  return [
    "import requests",
    "",
    "response = requests.post('https://example.com/items', json={\"name\": \"widget\"}, timeout=5)",
    "print(response.status_code)"
  ].join("\n");
}
