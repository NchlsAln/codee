export function cliArgsTemplate(): string {
  return [
    "args = System.argv()",
    "{opts, _, _} = OptionParser.parse(args, switches: [env: :string])",
    "IO.puts(opts[:env] || 'dev')"
  ].join("\n");
}
