"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xunitTestTemplate = xunitTestTemplate;
function xunitTestTemplate() {
    return [
        "using Xunit;",
        "",
        "public class MathTests",
        "{",
        "  [Fact]",
        "  public void AddsNumbers()",
        "  {",
        "    Assert.Equal(4, 2 + 2);",
        "  }",
        "}"
    ].join("\n");
}
