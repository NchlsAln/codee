"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "var radius = 3.0;",
        "var area = Math.PI * Math.Pow(radius, 2);",
        "var rounded = Math.Round(area, 2);",
        "Console.WriteLine(rounded);"
    ].join("\n");
}
