export function compojureRoutesTemplate(): string {
  return [
    "(ns app.routes",
    "  (:require [compojure.core :refer [GET defroutes]]",
    "            [compojure.route :as route]))",
    "",
    "(defroutes app",
    "  (GET \"/health\" [] \"ok\")",
    "  (route/not-found \"not found\"))"
  ].join("\n");
}
