"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferElixirTypes = inferElixirTypes;
function inferElixirTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const spec = line.match(/@spec\s+(\w+)\s*\(([^)]*)\)\s*::\s*(.+)/);
        if (spec?.[1] && spec?.[3]) {
            inferred[spec[1]] = spec[3].trim();
        }
        const struct = line.match(/%([A-Z][A-Za-z0-9_]+)\{/);
        if (struct?.[1]) {
            inferred[struct[1]] = "struct";
        }
        const stringLiteral = line.match(/\b(\w+)\s*=\s*".*"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "String";
            continue;
        }
        const intLiteral = line.match(/\b(\w+)\s*=\s*\d+\b/);
        if (intLiteral?.[1]) {
            inferred[intLiteral[1]] = "integer";
            continue;
        }
        const boolLiteral = line.match(/\b(\w+)\s*=\s*(true|false)\b/);
        if (boolLiteral?.[1]) {
            inferred[boolLiteral[1]] = "boolean";
            continue;
        }
        const listLiteral = line.match(/\b(\w+)\s*=\s*\[.*\]/);
        if (listLiteral?.[1]) {
            inferred[listLiteral[1]] = "list";
            continue;
        }
        const mapLiteral = line.match(/\b(\w+)\s*=\s*%\{.*\}/);
        if (mapLiteral?.[1]) {
            inferred[mapLiteral[1]] = "map";
        }
    }
    return inferred;
}
