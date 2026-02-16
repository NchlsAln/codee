export function propertyTemplate(): string {
  return [
    "using FsCheck.Xunit;",
    "using Xunit;",
    "",
    "public class Properties {",
    "  [Property]",
    "  public bool ReverseIsInvolutive(int[] xs) => xs.Reverse().Reverse().SequenceEqual(xs);",
    "}"
  ].join("\n");
}
