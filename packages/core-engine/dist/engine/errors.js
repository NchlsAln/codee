"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineError = void 0;
exports.toUserError = toUserError;
class EngineError extends Error {
    category;
    suggestion;
    constructor(category, message, suggestion) {
        super(message);
        this.category = category;
        this.suggestion = suggestion;
    }
}
exports.EngineError = EngineError;
function toUserError(error) {
    if (error instanceof EngineError) {
        return { category: error.category, message: error.message, suggestion: error.suggestion };
    }
    return {
        category: "unknown",
        message: error instanceof Error ? error.message : "Unexpected error.",
        suggestion: "Try again or check logs for details."
    };
}
