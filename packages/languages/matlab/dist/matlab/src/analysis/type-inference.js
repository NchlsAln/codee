"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferMatlabTypes = inferMatlabTypes;
function inferMatlabTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const numericLiteral = line.match(/(\w+)\s*=\s*\d+(?:\.\d+)?/);
        if (numericLiteral?.[1]) {
            inferred[numericLiteral[1]] = "double";
            continue;
        }
        const stringLiteral = line.match(/(\w+)\s*=\s*'[^']*'/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "char";
            continue;
        }
        const matrixLiteral = line.match(/(\w+)\s*=\s*\[.*\]/);
        if (matrixLiteral?.[1]) {
            inferred[matrixLiteral[1]] = "matrix";
            continue;
        }
        const tableLiteral = line.match(/(\w+)\s*=\s*table\(/);
        if (tableLiteral?.[1]) {
            inferred[tableLiteral[1]] = "table";
            continue;
        }
        const structLiteral = line.match(/(\w+)\s*=\s*struct\(/);
        if (structLiteral?.[1]) {
            inferred[structLiteral[1]] = "struct";
            continue;
        }
        const cellLiteral = line.match(/(\w+)\s*=\s*\{.*\}/);
        if (cellLiteral?.[1]) {
            inferred[cellLiteral[1]] = "cell";
            continue;
        }
        const logicalLiteral = line.match(/(\w+)\s*=\s*(true|false)\b/i);
        if (logicalLiteral?.[1]) {
            inferred[logicalLiteral[1]] = "logical";
        }
    }
    return inferred;
}
