export function ioTemplate(): string {
  return [
    "use std::fs;",
    "",
    "fs::write(\"data.txt\", \"hello\").unwrap();",
    "let content = fs::read_to_string(\"data.txt\").unwrap();",
    "",
    "println!(\"{}\", content);"
  ].join("\n");
}
