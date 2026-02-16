"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "import 'dart:convert';",
        "",
        "final user = {'id': 1, 'name': 'Ada'};",
        "final json = jsonEncode(user);",
        "print(json);"
    ].join("\n");
}
