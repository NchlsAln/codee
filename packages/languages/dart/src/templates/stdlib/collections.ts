export function collectionsTemplate(): string {
  return [
    "final nums = [1, 2, 3, 4];",
    "final evens = nums.where((n) => n.isEven).toList();",
    "final doubled = nums.map((n) => n * 2).toList();",
    "final total = nums.fold<int>(0, (sum, n) => sum + n);",
    "print(evens);",
    "print(doubled);",
    "print(total);"
  ].join("\n");
}
