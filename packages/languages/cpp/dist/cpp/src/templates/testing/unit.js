"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return "#include <gtest/gtest.h>\n\nint add(int a, int b) { return a + b; }\n\nTEST(MathTest, AddsNumbers) {\n  EXPECT_EQ(add(2, 3), 5);\n}\n";
}
