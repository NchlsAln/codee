"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "(require '[reitit.ring :as ring])",
        "(def app",
        "  (ring/ring-handler",
        "    (ring/router",
        "      [[\"/health\" {:get (fn [_] {:status 200 :body \"ok\"})}]])))"
    ].join("\n");
}
