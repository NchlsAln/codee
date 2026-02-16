export function cliArgsTemplate(): string {
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
