"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
    return [
        "import { Client } from 'pg';",
        "",
        "const client = new Client({ connectionString: 'postgres://user:pass@localhost/app' });",
        "await client.connect();",
        "",
        "const result = await client.query('SELECT id, email FROM users WHERE is_active = $1', [true]);",
        "console.log(result.rows);",
        "",
        "await client.end();"
    ].join("\n");
}
