"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpRuntime = void 0;
exports.phpRuntime = {
    runtimeModel: "Zend Engine with opcode compilation; request lifecycle under FPM/Apache; OPcache for caching.",
    packageManager: "Composer",
    lspServer: "intelephense",
    executionModel: ["fpm", "cli", "apache-module"],
    opcache: "OPcache"
};
