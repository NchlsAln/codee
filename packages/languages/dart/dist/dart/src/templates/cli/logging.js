"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
    return [
        "import 'package:logging/logging.dart';",
        "",
        "final logger = Logger('app');",
        "logger.onRecord.listen((r) => print(r.message));",
        "logger.info('started');"
    ].join("\n");
}
