"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "import 'dotenv/config';",
        "",
        "const host = process.env.HOST ?? 'localhost';",
        "const port = Number(process.env.PORT ?? '8080');",
        "",
        "console.log({ host, port });"
    ].join("\n");
}
