export function cliArgsTemplate(): string {
  return [
    "require 'optparse'",
    "options = {}",
    "OptionParser.new do |opts|",
    "  opts.on('-e', '--env ENV') { |v| options[:env] = v }",
    "end.parse!",
    "puts options[:env] || 'dev'"
  ].join("\n");
}
