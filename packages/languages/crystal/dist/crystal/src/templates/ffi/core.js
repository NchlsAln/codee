"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiTemplate = ffiTemplate;
function ffiTemplate() {
    return [
        "@[Link(\"c\")]",
        "lib LibC",
        "  fun puts(s : UInt8*) : Int32",
        "end",
        "LibC.puts(\"hi\")",
        "@[Link(\"m\")]",
        "lib LibM",
        "  fun sqrt(x : Float64) : Float64",
        "end",
        "LibM.sqrt(9.0)"
    ].join("\n");
}
