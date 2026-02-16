"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationTemplate = configurationTemplate;
function configurationTemplate() {
    return [
        "env: prod",
        "features:",
        "  beta: false"
    ].join("\n");
}
