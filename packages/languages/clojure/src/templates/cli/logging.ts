export function cliLoggingTemplate(): string {
  return [
    "(require '[clojure.tools.logging :as log])",
    "(log/info \"started\")"
  ].join("\n");
}
