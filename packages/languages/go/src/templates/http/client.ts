export function httpClientTemplate(): string {
  return "package main\n\nimport (\n  \"encoding/json\"\n  \"net/http\"\n)\n\nfunc main() {\n  resp, _ := http.Get(\"https://example.com/health\")\n  defer resp.Body.Close()\n  var payload map[string]any\n  _ = json.NewDecoder(resp.Body).Decode(&payload)\n}\n";
}
