"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "import { Command } from 'commander';",
        "",
        "const program = new Command();",
        "program.option('-c, --count <n>', 'count', '1');",
        "program.parse();",
        "",
        "const opts = program.opts<{ count: string }>();",
        "console.log(Number(opts.count));"
    ].join("\n");
}
