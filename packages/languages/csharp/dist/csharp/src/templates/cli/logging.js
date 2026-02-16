"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "using Microsoft.Extensions.Logging;",
        "",
        "using var loggerFactory = LoggerFactory.Create(builder => builder.AddConsole());",
        "var logger = loggerFactory.CreateLogger(\"app\");",
        "logger.LogInformation(\"started\");"
    ].join("\n");
}
