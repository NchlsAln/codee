"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "import 'dart:math';",
        "",
        "final radius = 3.0;",
        "final area = pi * pow(radius, 2);",
        "print(area.toStringAsFixed(2));"
    ].join("\n");
}
