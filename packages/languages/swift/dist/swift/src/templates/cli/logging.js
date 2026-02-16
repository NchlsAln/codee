"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "import Logging",
        "",
        "var logger = Logger(label: \"app\")",
        "logger.info(\"started\")"
    ].join("\n");
}
