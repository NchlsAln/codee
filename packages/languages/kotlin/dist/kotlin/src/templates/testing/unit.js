"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "import kotlin.test.Test",
        "import kotlin.test.assertEquals",
        "",
        "class MathTest {",
        "  private fun add(a: Int, b: Int) = a + b",
        "",
        "  @Test",
        "  fun addsNumbers() {",
        "    assertEquals(5, add(2, 3))",
        "  }",
        "}"
    ].join("\n");
}
