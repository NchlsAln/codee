export function xunitTestTemplate(): string {
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
