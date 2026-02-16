"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferClojureTypes = inferClojureTypes;
function inferClojureTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const spec = line.match(/\(s\/def\s+(\w+)\s+(.+)\)/);
        if (spec?.[1] && spec?.[2]) {
            inferred[spec[1]] = spec[2].trim();
        }
        const typeHint = line.match(/\^([\w\.]+)\s+(\w+)/);
        if (typeHint?.[1] && typeHint?.[2]) {
            inferred[typeHint[2]] = typeHint[1];
        }
        const stringLiteral = line.match(/\(def\s+(\w+)\s+\"[^\"]*\"\)/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "string";
            continue;
        }
        const numberLiteral = line.match(/\(def\s+(\w+)\s+-?\d+(?:\.\d+)?\)/);
        if (numberLiteral?.[1]) {
            inferred[numberLiteral[1]] = "number";
            continue;
        }
        const vectorLiteral = line.match(/\(def\s+(\w+)\s+\[.*\]\)/);
        if (vectorLiteral?.[1]) {
            inferred[vectorLiteral[1]] = "vector";
            continue;
        }
        const mapLiteral = line.match(/\(def\s+(\w+)\s+\{.*\}\)/);
        if (mapLiteral?.[1]) {
            inferred[mapLiteral[1]] = "map";
            continue;
        }
        const setLiteral = line.match(/\(def\s+(\w+)\s+#\{.*\}\)/);
        if (setLiteral?.[1]) {
            inferred[setLiteral[1]] = "set";
            continue;
        }
        const fnLiteral = line.match(/\(defn\s+(\w+)\b/);
        if (fnLiteral?.[1]) {
            inferred[fnLiteral[1]] = "function";
        }
    }
    return inferred;
}
