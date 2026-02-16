"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferJsonTypes = inferJsonTypes;
function inferValueType(value) {
    if (value === null) {
        return "null";
    }
    if (Array.isArray(value)) {
        const types = Array.from(new Set(value.map(inferValueType)));
        return types.length ? `array<${types.join("|")}>` : "array<unknown>";
    }
    switch (typeof value) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        case "object":
            return "object";
        default:
            return "unknown";
    }
}
function inferJsonTypes(source) {
    const inferred = {};
    try {
        const parsed = JSON.parse(source);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
            for (const [key, value] of Object.entries(parsed)) {
                inferred[key] = inferValueType(value);
            }
        }
        else {
            inferred.root = inferValueType(parsed);
        }
    }
    catch {
        return {};
    }
    return inferred;
}
