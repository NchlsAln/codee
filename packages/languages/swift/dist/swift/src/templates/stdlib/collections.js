"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "let nums = [1, 2, 3, 4]",
        "let evens = nums.filter { $0 % 2 == 0 }",
        "let doubled = nums.map { $0 * 2 }",
        "let total = nums.reduce(0, +)",
        "print(evens)",
        "print(doubled)",
        "print(total)"
    ].join("\n");
}
