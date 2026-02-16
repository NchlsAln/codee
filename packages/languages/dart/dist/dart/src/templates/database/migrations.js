"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "import 'package:drift/drift.dart';",
        "",
        "final migration = MigrationStrategy(",
        "  onCreate: (m) => m.createAll(),",
        "  onUpgrade: (m, from, to) async {",
        "    if (from < 2) await m.addColumn(users, users.name);",
        "  },",
        ");"
    ].join("\n");
}
