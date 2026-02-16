"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdlibTemplate = stdlibTemplate;
function stdlibTemplate() {
    return [
        "import std/[strutils, tables, math, os]",
        "let arr = [1, 2, 3]",
        "let upper = \"nim\".toUpperAscii()",
        "var m = initTable[string, int]()",
        "m[\"a\"] = 1",
        "writeFile(\"data.txt\", \"ok\\n\")",
        "let data = readFile(\"data.txt\")",
        "let root = sqrt(81.0)",
        "discard arr; discard upper; discard data; discard root"
    ].join("\n");
}
