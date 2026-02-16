"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyTemplate = propertyTemplate;
function propertyTemplate() {
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
