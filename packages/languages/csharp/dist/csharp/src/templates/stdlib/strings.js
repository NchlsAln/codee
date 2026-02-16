"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "var raw = \"  CSharp  \";",
        "var trimmed = raw.Trim();",
        "var upper = trimmed.ToUpperInvariant();",
        "var parts = trimmed.Split('a');",
        "var interpolated = $\"value={upper}\";",
        "Console.WriteLine(string.Join(\",\", parts));",
        "Console.WriteLine(interpolated);"
    ].join("\n");
}
