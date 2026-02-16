"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return "package main\n\nimport (\n  \"github.com/pressly/goose/v3\"\n)\n\nfunc main() {\n  _ = goose.Up(nil, \"migrations\")\n}\n";
}
