"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "(require '[migratus.core :as migratus])",
        "(def config {:store :database :db {:dbtype \"postgres\" :dbname \"app\"}})",
        "(migratus/migrate config)"
    ].join("\n");
}
