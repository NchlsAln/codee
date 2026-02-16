"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferSedTypes = inferSedTypes;
function inferSedTypes(source) {
    const inferred = {};
    if (/s\/[^/]+\/[^/]+\//.test(source)) {
        inferred.patternSpace = "string";
    }
    return inferred;
}
