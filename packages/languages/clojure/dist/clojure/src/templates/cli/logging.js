"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "(require '[clojure.tools.logging :as log])",
        "(log/info \"started\")"
    ].join("\n");
}
