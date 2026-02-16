"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "name = \"Ada Lovelace\"",
        "upper = String.upcase(name)",
        "replaced = String.replace(name, \"Lovelace\", \"L.\")",
        "len = String.length(name)",
        "IO.puts(upper)",
        "IO.puts(replaced)",
        "IO.puts(len)"
    ].join("\n");
}
