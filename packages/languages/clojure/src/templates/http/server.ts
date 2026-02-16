export function httpServerTemplate(): string {
  return [
    "(require '[org.httpkit.server :as http])",
    "(defn handler [_] {:status 200 :body \"ok\"})",
    "(http/run-server handler {:port 8080})"
  ].join("\n");
}
