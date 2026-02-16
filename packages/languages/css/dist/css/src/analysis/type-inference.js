"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferCssTypes = inferCssTypes;
function inferCssTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const customProp = line.match(/--([\w-]+)\s*:\s*([^;]+);?/);
        if (customProp?.[1] && customProp?.[2]) {
            const name = customProp[1];
            const value = customProp[2].trim();
            if (/^#|rgb\(|hsl\(/i.test(value)) {
                inferred[`--${name}`] = "color";
            }
            else if (/\b\d+(px|rem|em|vw|vh|%)\b/.test(value)) {
                inferred[`--${name}`] = "length";
            }
            else if (/^url\(/i.test(value)) {
                inferred[`--${name}`] = "url";
            }
            else if (/^calc\(/i.test(value)) {
                inferred[`--${name}`] = "calc";
            }
            else {
                inferred[`--${name}`] = "string";
            }
        }
    }
    return inferred;
}
