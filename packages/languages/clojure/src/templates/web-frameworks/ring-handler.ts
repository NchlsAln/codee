export function ringHandlerTemplate(): string {
  return [
    "(ns app.handler",
    "  (:require [ring.util.response :as response]))",
    "",
    "(defn handler [_request]",
    "  (response/response \"ok\"))"
  ].join("\n");
}
