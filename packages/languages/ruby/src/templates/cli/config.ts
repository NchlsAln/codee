export function cliConfigTemplate(): string {
  return [
    "require 'yaml'",
    "config = YAML.load_file('config.yml')",
    "puts config['app']"
  ].join("\n");
}
