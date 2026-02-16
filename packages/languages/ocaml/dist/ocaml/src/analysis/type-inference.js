"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferOcamlTypes = inferOcamlTypes;
function inferOcamlTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const stringLiteral = line.match(/\blet\s+(\w+)\s*=\s*".*"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "string";
            continue;
        }
        const intLiteral = line.match(/\blet\s+(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[1]) {
            inferred[intLiteral[1]] = "int";
            continue;
        }
        const listLiteral = line.match(/\blet\s+(\w+)\s*=\s*\[.*\]/);
        if (listLiteral?.[1]) {
            inferred[listLiteral[1]] = "list";
            continue;
        }
        const fnLiteral = line.match(/\blet\s+(\w+)\s+\w+\s*=\s*fun\b/);
        if (fnLiteral?.[1]) {
            inferred[fnLiteral[1]] = "function";
        }
    }
    return inferred;
}
