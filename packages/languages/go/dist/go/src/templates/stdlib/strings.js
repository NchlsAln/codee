"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return "package main\n\nimport (\n  \"fmt\"\n  \"strings\"\n)\n\nfunc main() {\n  raw := \"  Ada Lovelace  \"\n  trimmed := strings.TrimSpace(raw)\n  slug := strings.ToLower(strings.ReplaceAll(trimmed, \" \", \"-\"))\n  parts := strings.Split(slug, \"-\")\n  fmt.Println(parts)\n}\n";
}
