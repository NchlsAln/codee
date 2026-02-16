"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rRuntime = void 0;
exports.rRuntime = {
    runtimeModel: "R interpreter with GC and vectorized operations; JIT in some runtimes.",
    packageManager: "CRAN (install.packages), renv",
    lspServer: "r-language-server",
    executionModel: ["interpreter", "jitted"]
};
