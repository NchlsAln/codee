"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferBashTypes = inferBashTypes;
function inferBashTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const declareInt = line.match(/^\s*declare\s+-i\s+(\w+)/);
        if (declareInt?.[1]) {
            inferred[declareInt[1]] = "int";
            continue;
        }
        const declareArray = line.match(/^\s*declare\s+-a\s+(\w+)/);
        if (declareArray?.[1]) {
            inferred[declareArray[1]] = "array";
            continue;
        }
        const declareAssoc = line.match(/^\s*declare\s+-A\s+(\w+)/);
        if (declareAssoc?.[1]) {
            inferred[declareAssoc[1]] = "map";
            continue;
        }
        const arrayAssign = line.match(/^\s*(\w+)\s*=\s*\(/);
        if (arrayAssign?.[1]) {
            inferred[arrayAssign[1]] = "array";
            continue;
        }
        const assignment = line.match(/^\s*(\w+)\s*=\s*(.+)$/);
        if (assignment?.[1] && assignment?.[2]) {
            const name = assignment[1];
            const value = assignment[2].trim();
            if (/^".*"$/.test(value) || /^'.*'$/.test(value)) {
                inferred[name] = "string";
            }
            else if (/^\d+$/.test(value)) {
                inferred[name] = "int";
            }
            else if (/^\d+\.\d+$/.test(value)) {
                inferred[name] = "float";
            }
            else if (/\$\(|`/.test(value)) {
                inferred[name] = "string";
            }
        }
    }
    return inferred;
}
