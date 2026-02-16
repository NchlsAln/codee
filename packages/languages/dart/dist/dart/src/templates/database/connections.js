"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "import 'package:postgres/postgres.dart';",
        "",
        "final conn = await Connection.open(",
        "  Endpoint(host: 'localhost', database: 'app', username: 'user', password: 'pass'),",
        ");",
        "print(conn.isOpen);",
        "await conn.close();"
    ].join("\n");
}
