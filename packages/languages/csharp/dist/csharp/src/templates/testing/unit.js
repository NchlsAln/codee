"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "using Xunit;",
        "",
        "public class MathTests {",
        "  [Fact]",
        "  public void Adds() {",
        "    Assert.Equal(2, 1 + 1);",
        "  }",
        "}"
    ].join("\n");
}
