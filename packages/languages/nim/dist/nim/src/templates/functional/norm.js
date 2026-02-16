"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normTemplate = normTemplate;
function normTemplate() {
    return [
        "import norm/model",
        "type User = ref object of Model",
        "  name*: string"
    ].join("\n");
}
