"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferRubyTypes = inferRubyTypes;
function inferRubyTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const stringLiteral = line.match(/\b(\w+)\s*=\s*".*"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "String";
            continue;
        }
        const intLiteral = line.match(/\b(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[1]) {
            inferred[intLiteral[1]] = "Integer";
            continue;
        }
        const boolLiteral = line.match(/\b(\w+)\s*=\s*(true|false)\b/);
        if (boolLiteral?.[1]) {
            inferred[boolLiteral[1]] = "Boolean";
            continue;
        }
        const arrayLiteral = line.match(/\b(\w+)\s*=\s*\[.*\]/);
        if (arrayLiteral?.[1]) {
            inferred[arrayLiteral[1]] = "Array";
            continue;
        }
        const hashLiteral = line.match(/\b(\w+)\s*=\s*\{.*\}/);
        if (hashLiteral?.[1]) {
            inferred[hashLiteral[1]] = "Hash";
        }
    }
    return inferred;
}
