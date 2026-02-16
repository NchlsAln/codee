"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdlibTemplate = stdlibTemplate;
function stdlibTemplate() {
    return [
        "arr = [1, 2, 3]",
        "upper = \"crystal\".upcase",
        "map = {\"a\" => 1}",
        "File.write(\"data.txt\", \"ok\\n\")",
        "data = File.read(\"data.txt\")",
        "root = Math.sqrt(81)",
        "arr; upper; map; data; root"
    ].join("\n");
}
