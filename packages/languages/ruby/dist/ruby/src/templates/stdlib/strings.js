"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "name = 'Ada Lovelace'",
        "upper = name.upcase",
        "replaced = name.gsub('Lovelace', 'L.')",
        "len = name.length",
        "puts upper",
        "puts replaced",
        "puts len"
    ].join("\n");
}
