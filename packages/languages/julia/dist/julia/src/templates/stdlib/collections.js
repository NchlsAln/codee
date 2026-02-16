"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "nums = [1, 2, 3]",
        "doubled = map(x -> x * 2, nums)",
        "dict = Dict(:a => 1, :b => 2)",
        "println(doubled)",
        "println(dict[:a])"
    ].join("\n");
}
