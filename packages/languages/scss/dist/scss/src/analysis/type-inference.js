"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferSCSSTypes = inferSCSSTypes;
function inferSCSSTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const match = line.match(/\$([\w-]+)\s*:\s*([^;]+);?/);
        if (match?.[1] && match?.[2]) {
            const name = match[1];
            const value = match[2].trim();
            if (/^#|rgb\(|hsl\(/i.test(value)) {
                inferred[`$${name}`] = "color";
            }
            else if (/\b\d+(px|rem|em|vw|vh|%)\b/.test(value)) {
                inferred[`$${name}`] = "length";
            }
            else if (/^\d+(\.\d+)?$/.test(value)) {
                inferred[`$${name}`] = "number";
            }
            else if (/^\(|\[/.test(value)) {
                inferred[`$${name}`] = "list";
            }
            else if (/^(true|false)$/.test(value)) {
                inferred[`$${name}`] = "bool";
            }
            else if (/^null$/.test(value)) {
                inferred[`$${name}`] = "null";
            }
            else {
                inferred[`$${name}`] = "string";
            }
        }
    }
    return inferred;
}
