"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferPhpTypes = inferPhpTypes;
function inferPhpTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const stringLiteral = line.match(/\$(\w+)\s*=\s*".*"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "string";
            continue;
        }
        const intLiteral = line.match(/\$(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[1]) {
            inferred[intLiteral[1]] = "int";
            continue;
        }
        const floatLiteral = line.match(/\$(\w+)\s*=\s*\d+\.\d+/);
        if (floatLiteral?.[1]) {
            inferred[floatLiteral[1]] = "float";
            continue;
        }
        const boolLiteral = line.match(/\$(\w+)\s*=\s*(true|false)\b/);
        if (boolLiteral?.[1]) {
            inferred[boolLiteral[1]] = "bool";
            continue;
        }
        const arrayLiteral = line.match(/\$(\w+)\s*=\s*(\[.*\]|array\()/);
        if (arrayLiteral?.[1]) {
            inferred[arrayLiteral[1]] = "array";
            continue;
        }
        const newInstance = line.match(/\$(\w+)\s*=\s*new\s+([A-Z][A-Za-z0-9_]*)/);
        if (newInstance?.[1] && newInstance?.[2]) {
            inferred[newInstance[1]] = newInstance[2];
        }
    }
    return inferred;
}
