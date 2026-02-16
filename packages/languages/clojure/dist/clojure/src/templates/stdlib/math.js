"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "(def values [1 4 9 16])",
        "(def roots (map #(Math/sqrt %) values))",
        "(def avg (/ (reduce + values) (count values)))",
        "(println roots avg)"
    ].join("\n");
}
