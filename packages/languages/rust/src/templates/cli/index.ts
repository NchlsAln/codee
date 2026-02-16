export function cliTemplate(): string {
  return [
    "use clap::Parser;",
    "",
    "#[derive(Parser)]",
    "struct Args {",
    "    #[arg(long, default_value_t = 1)]",
    "    count: u32,",
    "}",
    "",
    "fn main() {",
    "    let args = Args::parse();",
    "    println!(\"count={}\", args.count);",
    "}"
  ].join("\n");
}
