"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferErlangTypes = inferErlangTypes;
function inferErlangTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const spec = line.match(/-spec\s+(\w+)\s*\(([^)]*)\)\s*->\s*(.+)\./);
        if (spec?.[1] && spec?.[3]) {
            inferred[spec[1]] = spec[3].trim();
        }
        const record = line.match(/-record\((\w+),/);
        if (record?.[1]) {
            inferred[record[1]] = "record";
        }
        const stringLiteral = line.match(/\b([A-Z][A-Za-z0-9_]*)\s*=\s*".*"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "string";
            continue;
        }
        const intLiteral = line.match(/\b([A-Z][A-Za-z0-9_]*)\s*=\s*\d+\b/);
        if (intLiteral?.[1]) {
            inferred[intLiteral[1]] = "integer";
            continue;
        }
        const atomLiteral = line.match(/\b([A-Z][A-Za-z0-9_]*)\s*=\s*[a-z][a-z0-9_]*\b/);
        if (atomLiteral?.[1]) {
            inferred[atomLiteral[1]] = "atom";
            continue;
        }
        const listLiteral = line.match(/\b([A-Z][A-Za-z0-9_]*)\s*=\s*\[.*\]/);
        if (listLiteral?.[1]) {
            inferred[listLiteral[1]] = "list";
            continue;
        }
        const tupleLiteral = line.match(/\b([A-Z][A-Za-z0-9_]*)\s*=\s*\{.*\}/);
        if (tupleLiteral?.[1]) {
            inferred[tupleLiteral[1]] = "tuple";
        }
    }
    return inferred;
}
