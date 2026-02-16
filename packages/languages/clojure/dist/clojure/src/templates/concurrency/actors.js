"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return [
        "(def counter (agent 0))",
        "(send counter inc)",
        "(await counter)",
        "(println @counter)"
    ].join("\n");
}
