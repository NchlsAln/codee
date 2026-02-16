export function genieTemplate(): string {
  return [
    "using Genie",
    "route(\"/health\") do",
    "  \"ok\"",
    "end",
    "up()"
  ].join("\n");
}
