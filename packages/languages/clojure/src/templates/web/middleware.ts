export function middlewareTemplate(): string {
  return [
    "(defn wrap-auth [handler]",
    "  (fn [req]",
    "    (if (get-in req [:headers \"authorization\"])",
    "      (handler req)",
    "      {:status 401 :body \"unauthorized\"})))"
  ].join("\n");
}
