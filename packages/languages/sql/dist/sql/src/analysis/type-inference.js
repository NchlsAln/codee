"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferSqlTypes = inferSqlTypes;
function inferSqlTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const createTable = line.match(/CREATE\s+TABLE\s+(\w+)\s*\(/i);
        if (createTable?.[1]) {
            inferred[createTable[1]] = "table";
        }
    }
    return inferred;
}
