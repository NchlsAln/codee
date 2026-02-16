"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servantTemplate = servantTemplate;
function servantTemplate() {
    return [
        "type API = \"health\" :> Get '[PlainText] String",
        "server :: Server API",
        "server = pure \"ok\""
    ].join("\n");
}
