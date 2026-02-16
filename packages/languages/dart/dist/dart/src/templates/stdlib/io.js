"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioTemplate = ioTemplate;
function ioTemplate() {
    return [
        "import 'dart:io';",
        "",
        "final file = File('data.txt');",
        "final text = file.readAsStringSync();",
        "file.writeAsStringSync('$text\\nmore');",
        "print(text);"
    ].join("\n");
}
