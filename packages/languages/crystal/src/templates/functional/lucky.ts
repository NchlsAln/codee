export function luckyTemplate(): string {
  return [
    "class Health::Index < Lucky::Action",
    "  get \"/health\" do",
    "    plain_text \"ok\"",
    "  end",
    "end"
  ].join("\n");
}
