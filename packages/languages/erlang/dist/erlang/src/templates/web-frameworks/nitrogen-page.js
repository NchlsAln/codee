"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nitrogenPageTemplate = nitrogenPageTemplate;
function nitrogenPageTemplate() {
    return [
        "-module(health_page).",
        "-compile(export_all).",
        "",
        "main() ->",
        "  [#panel{body=[\"ok\"]}]."
    ].join("\n");
}
