"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return "#include <spdlog/spdlog.h>\n\nint main() {\n  spdlog::info(\"service started\");\n  return 0;\n}\n";
}
