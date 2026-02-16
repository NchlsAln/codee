export function httpClientTemplate(): string {
  return [
    "(require '[clj-http.client :as http])",
    "(def resp (http/get \"https://api.example.com/health\"))",
    "(println (:status resp))"
  ].join("\n");
}
