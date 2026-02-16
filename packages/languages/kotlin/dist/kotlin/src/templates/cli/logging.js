"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "import org.slf4j.LoggerFactory",
        "",
        "val logger = LoggerFactory.getLogger(\"app\")",
        "logger.info(\"service started\")"
    ].join("\n");
}
