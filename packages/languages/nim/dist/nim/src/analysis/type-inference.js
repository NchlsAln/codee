"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferNimTypes = inferNimTypes;
function inferNimTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const typedVar = line.match(/\b(?:let|var)\s+(\w+)\s*:\s*([^=\s]+)/);
        if (typedVar?.[1] && typedVar?.[2]) {
            inferred[typedVar[1]] = typedVar[2];
            continue;
        }
        const stringLiteral = line.match(/\b(?:let|var)\s+(\w+)\s*=\s*\".*\"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "string";
            continue;
        }
        const intLiteral = line.match(/\b(?:let|var)\s+(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[1]) {
            inferred[intLiteral[1]] = "int";
            continue;
        }
        const seqLiteral = line.match(/\b(?:let|var)\s+(\w+)\s*=\s*@\[/);
        if (seqLiteral?.[1]) {
            inferred[seqLiteral[1]] = "seq";
            continue;
        }
        const procLiteral = line.match(/\bproc\s+(\w+)\b/);
        if (procLiteral?.[1]) {
            inferred[procLiteral[1]] = "proc";
        }
    }
    return inferred;
}
