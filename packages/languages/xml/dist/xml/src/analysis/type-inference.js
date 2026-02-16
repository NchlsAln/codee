"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferXmlTypes = inferXmlTypes;
function inferXmlTypes(source) {
    const inferred = {};
    const typeMatches = source.match(/xsi:type\s*=\s*"([^"]+)"/g) ?? [];
    typeMatches.forEach((match, index) => {
        const valueMatch = match.match(/"([^"]+)"/);
        if (valueMatch?.[1]) {
            inferred[`xsi:type:${index}`] = valueMatch[1];
        }
    });
    const elementMatches = source.match(/<([A-Za-z_][\w.-]*)/g) ?? [];
    elementMatches.slice(0, 10).forEach((match) => {
        const name = match.replace("<", "");
        inferred[name] = "element";
    });
    return inferred;
}
