"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiWasmTemplate = ffiWasmTemplate;
function ffiWasmTemplate() {
    return [
        "using System.Runtime.InteropServices.JavaScript;",
        "",
        "public static partial class Interop {",
        "  [JSImport(\"add\", \"env\")]",
        "  public static partial int Add(int a, int b);",
        "}",
        "",
        "Console.WriteLine(Interop.Add(1, 2));"
    ].join("\n");
}
