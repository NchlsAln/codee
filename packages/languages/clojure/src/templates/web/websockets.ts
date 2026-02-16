export function websocketsTemplate(): string {
  return [
    "(defn socket-handler [req]",
    "  ;; Placeholder for http-kit websocket",
    "  {:status 101 :body \"switching\"})"
  ].join("\n");
}
