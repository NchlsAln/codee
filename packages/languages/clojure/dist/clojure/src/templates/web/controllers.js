"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerTemplate = controllerTemplate;
function controllerTemplate() {
    return [
        "(defn health-handler [_]",
        "  {:status 200",
        "   :headers {\"content-type\" \"application/json\"}",
        "   :body \"{\\\"ok\\\":true}\"})"
    ].join("\n");
}
