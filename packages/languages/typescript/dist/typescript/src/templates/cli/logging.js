"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "import pino from 'pino';",
        "",
        "const logger = pino({ level: 'info' });",
        "logger.info({ ok: true }, 'service started');"
    ].join("\n");
}
