"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "require 'logger'",
        "log = Logger.new($stdout)",
        "log.info('started')"
    ].join("\n");
}
