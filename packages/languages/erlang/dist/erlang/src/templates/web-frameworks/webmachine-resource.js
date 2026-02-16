"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webmachineResourceTemplate = webmachineResourceTemplate;
function webmachineResourceTemplate() {
    return [
        "-module(health_resource).",
        "-export([to_html/2]).",
        "",
        "to_html(ReqData, Context) ->",
        "  {\"ok\", ReqData, Context}."
    ].join("\n");
}
