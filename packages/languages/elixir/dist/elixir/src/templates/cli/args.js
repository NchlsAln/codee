"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "args = System.argv()",
        "{opts, _, _} = OptionParser.parse(args, switches: [env: :string])",
        "IO.puts(opts[:env] || 'dev')"
    ].join("\n");
}
