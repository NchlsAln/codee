export function controllerTemplate(): string {
  return [
    "(defn health-handler [_]",
    "  {:status 200",
    "   :headers {\"content-type\" \"application/json\"}",
    "   :body \"{\\\"ok\\\":true}\"})"
  ].join("\n");
}
