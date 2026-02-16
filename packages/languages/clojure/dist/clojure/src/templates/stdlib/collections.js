"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "(def nums [1 2 3 4])",
        "(def evens (filter even? nums))",
        "(def doubled (map #(* 2 %) nums))",
        "(def total (reduce + nums))",
        "(println evens)",
        "(println doubled)",
        "(println total)"
    ].join("\n");
}
