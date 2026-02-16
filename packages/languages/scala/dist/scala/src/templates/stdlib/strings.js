"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "val raw = \"  Scala  \"",
        "val trimmed = raw.trim",
        "val upper = trimmed.toUpperCase",
        "val parts = trimmed.split(\"a\").toList",
        "val interpolated = s\"value=$upper\"",
        "println(parts)",
        "println(interpolated)"
    ].join("\n");
}
