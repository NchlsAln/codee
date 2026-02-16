"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cInteropTemplate = cInteropTemplate;
function cInteropTemplate() {
    return [
        "@[Link(\"c\")]",
        "lib LibC",
        "  fun puts(s : UInt8*) : Int32",
        "end",
        "LibC.puts(\"hi\")"
    ].join("\n");
}
