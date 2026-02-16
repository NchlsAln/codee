"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return [
        "(defn wrap-auth [handler]",
        "  (fn [req]",
        "    (if (get-in req [:headers \"authorization\"])",
        "      (handler req)",
        "      {:status 401 :body \"unauthorized\"})))"
    ].join("\n");
}
