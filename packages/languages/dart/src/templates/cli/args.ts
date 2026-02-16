export function cliArgsTemplate(): string {
  return [
    "import 'package:args/args.dart';",
    "",
    "final parser = ArgParser()..addOption('port', defaultsTo: '8080');",
    "final result = parser.parse(args);",
    "print(result['port']);"
  ].join("\n");
}
