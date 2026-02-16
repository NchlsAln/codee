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
        const optionLiteral = line.match(/\bSome\b|\bNone\b/);
        if (optionLiteral) {
            inferred["option"] = "option";
        }
        const resultLiteral = line.match(/\bOk\b|\bError\b/);
        if (resultLiteral) {
            inferred["result"] = "result";
        }
        const arrayLiteral = line.match(/\blet\s+(\w+)\s*=\s*Array\./);
        if (arrayLiteral?.[1]) {
            inferred[arrayLiteral[1]] = "array";
            continue;
        }
        const mapLiteral = line.match(/\blet\s+(\w+)\s*=\s*Hashtbl\./);
        if (mapLiteral?.[1]) {
            inferred[mapLiteral[1]] = "hashtbl";
            continue;
        }
        const fnLiteral = line.match(/\blet\s+(\w+)\s+\w+\s*=\s*fun\b/);
        if (fnLiteral?.[1]) {
            inferred[fnLiteral[1]] = "function";
        }
    }
    return inferred;
}
