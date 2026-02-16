"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "import Foundation",
        "",
        "let radius = 3.0",
        "let area = Double.pi * pow(radius, 2)",
        "let rounded = String(format: \"%.2f\", area)",
        "print(rounded)"
    ].join("\n");
}
