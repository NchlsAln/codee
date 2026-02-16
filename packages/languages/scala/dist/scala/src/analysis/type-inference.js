"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferScalaTypes = inferScalaTypes;
function inferScalaTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const explicit = line.match(/\b(val|var)\s+(\w+)\s*:\s*([\w<>,?\s.]+)\s*(=|$)/);
        if (explicit?.[2] && explicit?.[3]) {
            inferred[explicit[2]] = explicit[3].trim();
            continue;
        }
        const stringLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*".*"/);
        if (stringLiteral?.[2]) {
            inferred[stringLiteral[2]] = "String";
            continue;
        }
        const intLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[2]) {
            inferred[intLiteral[2]] = "Int";
            continue;
        }
        const boolLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*(true|false)\b/);
        if (boolLiteral?.[2]) {
            inferred[boolLiteral[2]] = "Boolean";
        }
        const listLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*List\(/);
        if (listLiteral?.[2]) {
            inferred[listLiteral[2]] = "List[Any]";
        }
        const optionLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*Option\(/);
        if (optionLiteral?.[2]) {
            inferred[optionLiteral[2]] = "Option[Any]";
        }
        const eitherLiteral = line.match(/\b(val|var)\s+(\w+)\s*=\s*Right\(|Left\(/);
        if (eitherLiteral?.[2]) {
            inferred[eitherLiteral[2]] = "Either[Any, Any]";
        }
    }
    return inferred;
}
