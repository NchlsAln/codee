"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ringHandlerTemplate = ringHandlerTemplate;
function ringHandlerTemplate() {
    return [
        "(ns app.handler",
        "  (:require [ring.util.response :as response]))",
        "",
        "(defn handler [_request]",
        "  (response/response \"ok\"))"
    ].join("\n");
}
