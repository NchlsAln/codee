"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return "package main\n\nimport (\n  \"go.uber.org/zap\"\n)\n\nfunc main() {\n  logger, _ := zap.NewProduction()\n  defer logger.Sync()\n  logger.Info(\"service started\")\n}\n";
}
