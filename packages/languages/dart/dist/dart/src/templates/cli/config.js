"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "import 'dart:convert';",
        "import 'dart:io';",
        "",
        "final json = jsonDecode(File('config.json').readAsStringSync());",
        "print(json['port']);"
    ].join("\n");
}
