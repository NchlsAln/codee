"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
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
