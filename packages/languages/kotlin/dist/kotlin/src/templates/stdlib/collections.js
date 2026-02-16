"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "val users = listOf(\"Ada\", \"Linus\", \"Grace\")",
        "val filtered = users.filter { it.startsWith(\"A\") }",
        "val upper = users.map { it.uppercase() }",
        "val total = listOf(1, 2, 3).fold(0) { acc, item -> acc + item }",
        "println(filtered)",
        "println(upper)",
        "println(total)"
    ].join("\n");
}
