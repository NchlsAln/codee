"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingTemplate = sortingTemplate;
function sortingTemplate(language) {
    switch (language) {
        case "python":
            return "def quicksort(items):\n    if len(items) <= 1:\n        return items\n    pivot = items[len(items)//2]\n    left = [x for x in items if x < pivot]\n    mid = [x for x in items if x == pivot]\n    right = [x for x in items if x > pivot]\n    return quicksort(left) + mid + quicksort(right)\n";
        case "typescript":
            return "export function quicksort(items: number[]): number[] {\n  if (items.length <= 1) return items;\n  const pivot = items[Math.floor(items.length / 2)];\n  const left = items.filter((x) => x < pivot);\n  const mid = items.filter((x) => x === pivot);\n  const right = items.filter((x) => x > pivot);\n  return [...quicksort(left), ...mid, ...quicksort(right)];\n}\n";
        case "rust":
            return "// TODO: Implement quicksort in Rust\n";
        case "go":
            return "func quicksort(items []int) []int {\n  if len(items) <= 1 {\n    return items\n  }\n  pivot := items[len(items)/2]\n  left := make([]int, 0)\n  mid := make([]int, 0)\n  right := make([]int, 0)\n  for _, x := range items {\n    if x < pivot {\n      left = append(left, x)\n    } else if x == pivot {\n      mid = append(mid, x)\n    } else {\n      right = append(right, x)\n    }\n  }\n  left = quicksort(left)\n  right = quicksort(right)\n  return append(append(left, mid...), right...)\n}\n";
        default:
            return "// TODO: Implement template";
    }
}
