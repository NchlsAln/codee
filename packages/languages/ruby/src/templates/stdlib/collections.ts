export function collectionsTemplate(): string {
  return [
    "nums = [1, 2, 3, 4]",
    "evens = nums.select { |n| n.even? }",
    "doubled = nums.map { |n| n * 2 }",
    "total = nums.reduce(0) { |sum, n| sum + n }",
    "puts evens.inspect",
    "puts doubled.inspect",
    "puts total"
  ].join("\n");
}
