"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizationTemplate = optimizationTemplate;
function optimizationTemplate() {
    return [
        "library(lpSolve)",
        "obj <- c(3, 2)",
        "mat <- matrix(c(2, 1, 1, 1), nrow = 2, byrow = TRUE)",
        "dir <- c('<=', '<=')",
        "rhs <- c(100, 80)",
        "lp('max', obj, mat, dir, rhs)"
    ].join("\n");
}
