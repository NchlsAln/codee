"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "import logging",
        "",
        "logging.basicConfig(level=logging.INFO)",
        "logger = logging.getLogger('app')",
        "",
        "logger.info('service started')"
    ].join("\n");
}
