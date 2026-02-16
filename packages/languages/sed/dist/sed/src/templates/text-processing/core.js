"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textProcessingTemplate = textProcessingTemplate;
function textProcessingTemplate() {
    return [
        "sed 's/[[:space:]]\\+/ /g' input.txt",
        "sed '/^#/d' config.ini"
    ].join("\n");
}
