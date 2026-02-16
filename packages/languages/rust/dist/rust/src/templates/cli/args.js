"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
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
