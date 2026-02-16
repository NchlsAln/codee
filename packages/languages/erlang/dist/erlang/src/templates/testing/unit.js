"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "-module(unit_demo).",
        "-include_lib(\"eunit/include/eunit.hrl\").",
        "add_test() -> ?assertEqual(4, 2 + 2)."
    ].join("\n");
}
