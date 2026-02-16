export function collectionsTemplate(): string {
  return [
    "import tables, sequtils",
    "var nums = @[1, 2, 3]",
    "let doubled = nums.mapIt(it * 2)",
    "var counts = initTable[string, int]()",
    "counts[\"a\"] = 1",
    "echo doubled",
    "echo counts[\"a\"]"
  ].join("\n");
}
