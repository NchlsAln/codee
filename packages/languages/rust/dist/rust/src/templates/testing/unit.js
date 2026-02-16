"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "fn add(a: i32, b: i32) -> i32 {",
        "    a + b",
        "}",
        "",
        "#[test]",
        "fn adds_numbers() {",
        "    assert_eq!(add(2, 3), 5);",
        "}"
    ].join("\n");
}
