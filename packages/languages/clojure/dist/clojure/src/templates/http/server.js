"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "(require '[org.httpkit.server :as http])",
        "(defn handler [_] {:status 200 :body \"ok\"})",
        "(http/run-server handler {:port 8080})"
    ].join("\n");
}
