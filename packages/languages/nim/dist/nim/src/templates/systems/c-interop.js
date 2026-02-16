"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cInteropTemplate = cInteropTemplate;
function cInteropTemplate() {
    return [
        "proc puts(s: cstring): cint {.importc, header: \"stdio.h\"}.",
        "discard puts(\"hello\")"
    ].join("\n");
}
