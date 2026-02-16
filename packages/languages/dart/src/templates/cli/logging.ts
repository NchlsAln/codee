export function cliLoggingTemplate(): string {
  return [
    "import 'package:logging/logging.dart';",
    "",
    "final logger = Logger('app');",
    "logger.onRecord.listen((r) => print(r.message));",
    "logger.info('started');"
  ].join("\n");
}
