export function stringsTemplate(): string {
  return [
    "name = 'Ada Lovelace'",
    "upper = name.upcase",
    "replaced = name.gsub('Lovelace', 'L.')",
    "len = name.length",
    "puts upper",
    "puts replaced",
    "puts len"
  ].join("\n");
}
