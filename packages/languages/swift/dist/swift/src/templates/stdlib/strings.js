"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "let raw = \"  Swift  \"",
        "let trimmed = raw.trimmingCharacters(in: .whitespaces)",
        "let upper = trimmed.uppercased()",
        "let parts = trimmed.split(separator: \"i\")",
        "let interpolated = \"value=\\(upper)\"",
        "print(parts)",
        "print(interpolated)"
    ].join("\n");
}
