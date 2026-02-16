"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return [
        "(defn socket-handler [req]",
        "  ;; Placeholder for http-kit websocket",
        "  {:status 101 :body \"switching\"})"
    ].join("\n");
}
