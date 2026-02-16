export function unitTemplate(): string {
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
