"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "nums = [1, 2, 3]",
        "doubled = nums.map { |n| n * 2 }",
        "counts = {\"a\" => 1, \"b\" => 2}",
        "puts doubled",
        "puts counts[\"a\"]"
    ].join("\n");
}
