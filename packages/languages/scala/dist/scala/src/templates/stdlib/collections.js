"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "val nums = List(1, 2, 3, 4)",
        "val evens = nums.filter(_ % 2 == 0)",
        "val doubled = nums.map(_ * 2)",
        "val total = nums.foldLeft(0)(_ + _)",
        "println(evens)",
        "println(doubled)",
        "println(total)"
    ].join("\n");
}
