export function httpRestTemplate(): string {
  return [
    "(require '[compojure.core :refer [GET defroutes]])",
    "(defroutes app",
    "  (GET \"/users/:id\" [id] {:status 200 :body id}))"
  ].join("\n");
}
