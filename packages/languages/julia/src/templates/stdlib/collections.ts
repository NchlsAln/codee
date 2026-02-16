export function collectionsTemplate(): string {
  return [
    "nums = [1, 2, 3]",
    "doubled = map(x -> x * 2, nums)",
    "dict = Dict(:a => 1, :b => 2)",
    "println(doubled)",
    "println(dict[:a])"
  ].join("\n");
}
