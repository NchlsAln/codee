export function cliConfigTemplate(): string {
  return [
    "config = Application.get_env(:my_app, :setting, :default)",
    "IO.inspect(config)"
  ].join("\n");
}
