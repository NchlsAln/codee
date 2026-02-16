"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferJuliaTypes = inferJuliaTypes;
function inferJuliaTypes(source) {
    const inferred = {};
    const lines = source.split(/\r?\n/);
    for (const line of lines) {
        const typedVar = line.match(/(\w+)\s*::\s*(\w+)/);
        if (typedVar?.[1] && typedVar?.[2]) {
            inferred[typedVar[1]] = typedVar[2];
            continue;
        }
        const stringLiteral = line.match(/(\w+)\s*=\s*\".*\"/);
        if (stringLiteral?.[1]) {
            inferred[stringLiteral[1]] = "String";
            continue;
        }
        const numberLiteral = line.match(/(\w+)\s*=\s*\d+(?:\.\d+)?/);
        if (numberLiteral?.[1]) {
            inferred[numberLiteral[1]] = "Number";
            continue;
        }
        const arrayLiteral = line.match(/(\w+)\s*=\s*\[/);
        if (arrayLiteral?.[1]) {
            inferred[arrayLiteral[1]] = "Array";
            continue;
        }
        const dictLiteral = line.match(/(\w+)\s*=\s*Dict\(/);
        if (dictLiteral?.[1]) {
            inferred[dictLiteral[1]] = "Dict";
            continue;
        }
        const dataFrameLiteral = line.match(/(\w+)\s*=\s*DataFrame\(/);
        if (dataFrameLiteral?.[1]) {
            inferred[dataFrameLiteral[1]] = "DataFrame";
        }
    }
    return inferred;
}
