export function cliConfigTemplate(): string {
  return [
    "use config::Config;",
    "",
    "let settings = Config::builder().add_source(config::File::with_name(\"Settings\")).build()?;",
    "let host: String = settings.get(\"server.host\")?;",
    "",
    "println!(\"{}\", host);"
  ].join("\n");
}
