"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations = void 0;
exports.migrateConfig = migrateConfig;
const defaults_1 = require("./defaults");
exports.migrations = {
    1: (config) => ({ ...defaults_1.DEFAULT_CONFIG, ...config })
};
function migrateConfig(config) {
    const targetVersion = defaults_1.DEFAULT_CONFIG.version;
    let current = config;
    for (let version = config.version; version <= targetVersion; version += 1) {
        const migration = exports.migrations[version];
        if (migration) {
            current = migration(current);
        }
    }
    return { ...current, version: targetVersion };
}
