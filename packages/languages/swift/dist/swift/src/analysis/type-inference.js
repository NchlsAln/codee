"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferSwiftTypes = inferSwiftTypes;
function inferSwiftTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const explicit = line.match(/\b(let|var)\s+(\w+)\s*:\s*([\w<>,?\s.]+)\s*(=|$)/);
        if (explicit?.[2] && explicit?.[3]) {
            inferred[explicit[2]] = explicit[3].trim();
            continue;
        }
        const stringLiteral = line.match(/\b(let|var)\s+(\w+)\s*=\s*".*"/);
        if (stringLiteral?.[2]) {
            inferred[stringLiteral[2]] = "String";
            continue;
        }
        const intLiteral = line.match(/\b(let|var)\s+(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[2]) {
            inferred[intLiteral[2]] = "Int";
            continue;
        }
        const boolLiteral = line.match(/\b(let|var)\s+(\w+)\s*=\s*(true|false)\b/);
        if (boolLiteral?.[2]) {
            inferred[boolLiteral[2]] = "Bool";
            continue;
        }
        const arrayLiteral = line.match(/\b(let|var)\s+(\w+)\s*=\s*\[/);
        if (arrayLiteral?.[2]) {
            inferred[arrayLiteral[2]] = "[Any]";
            continue;
        }
        const dictLiteral = line.match(/\b(let|var)\s+(\w+)\s*=\s*\[/);
        if (dictLiteral?.[2] && line.includes(":")) {
            inferred[dictLiteral[2]] = "[AnyHashable: Any]";
            continue;
        }
        const optionLiteral = line.match(/\b(let|var)\s+(\w+)\s*=\s*nil\b/);
        if (optionLiteral?.[2]) {
            inferred[optionLiteral[2]] = "Any?";
        }
    }
    return inferred;
}
