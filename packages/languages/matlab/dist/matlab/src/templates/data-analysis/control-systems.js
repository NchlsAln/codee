"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlTemplate = controlTemplate;
function controlTemplate() {
    return [
        "sys = tf(1, [1 1]);",
        "step(sys);"
    ].join("\n");
}
