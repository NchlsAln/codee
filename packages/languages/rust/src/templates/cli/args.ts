export function cliArgsTemplate(): string {
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
    "    println!(\"{}\", args.count);",
    "}"
  ].join("\n");
}
