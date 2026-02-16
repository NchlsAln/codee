"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferSqlTypes = inferSqlTypes;
function inferSqlTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    let inCreate = false;
    for (const line of lines) {
        const createTable = line.match(/CREATE\s+TABLE\s+(\w+)\s*\(/i);
        if (createTable?.[1]) {
            inferred[createTable[1]] = "table";
            inCreate = true;
            continue;
        }
        if (inCreate && line.includes(");")) {
            inCreate = false;
            continue;
        }
        if (inCreate) {
            const column = line.trim().match(/^(\w+)\s+([A-Z]+\w*)/i);
            if (column?.[1] && column?.[2]) {
                inferred[column[1]] = column[2].toLowerCase();
            }
            continue;
        }
        const castExpr = line.match(/CAST\(.+\s+AS\s+(\w+)\)/i);
        if (castExpr?.[1]) {
            inferred["cast"] = castExpr[1].toLowerCase();
        }
        const typeCast = line.match(/::\s*(\w+)/);
        if (typeCast?.[1]) {
            inferred["type-cast"] = typeCast[1].toLowerCase();
        }
    }
    return inferred;
}
