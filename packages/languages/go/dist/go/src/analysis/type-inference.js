"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferGoTypes = inferGoTypes;
function inferGoTypes(source) {
    const hints = new Set();
    if (source.includes("interface{}") || source.includes("any")) {
        hints.add("empty-interface");
    }
    if (source.includes(":=")) {
        hints.add("short-var-declaration");
    }
    if (source.includes("[]")) {
        hints.add("slice");
    }
    if (source.includes("map[")) {
        hints.add("map");
    }
    if (source.includes("var ")) {
        hints.add("explicit-var");
    }
    if (source.includes("func(")) {
        hints.add("function-types");
    }
    if (source.includes("[T any]")) {
        hints.add("generics");
    }
    if (source.includes("type ")) {
        hints.add("named-types");
    }
    if (source.includes(".()")) {
        hints.add("type-assertions");
    }
    if (hints.size === 0) {
        hints.add("inferred-types");
    }
    return Array.from(hints);
}
