"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textProcessingTemplate = textProcessingTemplate;
function textProcessingTemplate() {
    return [
        "awk '/ERROR|WARN/ { print $0 }' app.log",
        "awk '{ gsub(/[[:space:]]+/, \" \"); print }' input.txt"
    ].join("\n");
}
