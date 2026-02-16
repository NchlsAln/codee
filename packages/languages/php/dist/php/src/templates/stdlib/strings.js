"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringTemplate = stringTemplate;
function stringTemplate() {
    return [
        "$name = 'Ada Lovelace';",
        "$upper = strtoupper($name);",
        "$replaced = str_replace('Lovelace', 'L.', $name);",
        "$len = mb_strlen($name);",
        "echo $upper;",
        "echo $replaced;",
        "echo $len;"
    ].join("\n");
}
