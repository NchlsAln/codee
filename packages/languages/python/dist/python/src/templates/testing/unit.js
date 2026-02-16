"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "def add(a: int, b: int) -> int:",
        "    return a + b",
        "",
        "def test_add():",
        "    assert add(2, 3) == 5"
    ].join("\n");
}
