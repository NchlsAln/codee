"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "import 'package:args/args.dart';",
        "",
        "final parser = ArgParser()..addOption('port', defaultsTo: '8080');",
        "final result = parser.parse(args);",
        "print(result['port']);"
    ].join("\n");
}
