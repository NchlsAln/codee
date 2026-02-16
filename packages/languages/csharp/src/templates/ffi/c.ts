export function ffiCTemplate(): string {
  return [
    "using System.Runtime.InteropServices;",
    "",
    "static class Native {",
    "  [DllImport(\"native\", EntryPoint = \"add\")]",
    "  public static extern int Add(int a, int b);",
    "}",
    "",
    "Console.WriteLine(Native.Add(1, 2));"
  ].join("\n");
}
