export function amberTemplate(): string {
  return [
    "# Amber route example",
    "get \"/health\" do |env|",
    "  env.response.print \"ok\"",
    "end"
  ].join("\n");
}
