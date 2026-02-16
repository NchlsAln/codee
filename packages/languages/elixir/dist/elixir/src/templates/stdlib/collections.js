"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "nums = [1, 2, 3, 4]",
        "evens = Enum.filter(nums, fn n -> rem(n, 2) == 0 end)",
        "doubled = Enum.map(nums, &(&1 * 2))",
        "total = Enum.reduce(nums, 0, &(&1 + &2))",
        "IO.inspect(evens)",
        "IO.inspect(doubled)",
        "IO.inspect(total)"
    ].join("\n");
}
