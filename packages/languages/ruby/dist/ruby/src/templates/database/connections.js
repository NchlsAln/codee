"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "require 'pg'",
        "conn = PG.connect(dbname: 'app', user: 'user', password: 'pass')",
        "puts 'connected'"
    ].join("\n");
}
