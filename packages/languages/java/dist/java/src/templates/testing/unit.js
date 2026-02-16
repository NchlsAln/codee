"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass MathTest {\n  int add(int a, int b) { return a + b; }\n\n  @Test\n  void addsNumbers() {\n    assertEquals(5, add(2, 3));\n  }\n}\n";
}
