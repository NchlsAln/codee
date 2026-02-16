export function cliTemplate(): string {
  return [
    "import std/[parseopt, json, logging]",
    "var p = initOptParser(commandLineParams())",
    "for kind, key, val in p.getopt():",
    "  if kind == cmdArgument: discard key",
    "let cfg = parseJson(readFile(\"config.json\"))",
    "info \"loaded config\"",
    "discard cfg"
  ].join("\n");
}
