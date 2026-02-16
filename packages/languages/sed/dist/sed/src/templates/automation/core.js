"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automationTemplate = automationTemplate;
function automationTemplate() {
    return [
        "sed -n '10,20p' input.txt",
        "sed -n '/ERROR/p' app.log"
    ].join("\n");
}
