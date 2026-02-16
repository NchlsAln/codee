"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "SELECT id, name",
        "FROM users",
        "WHERE active = TRUE;"
    ].join("\n");
}
