"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "-module(router_demo).",
        "-export([route/1]).",
        "route({get, \"/health\"}) -> {ok, 200, <<\"ok\">>};",
        "route(_) -> {ok, 404, <<\"not found\">>}."
    ].join("\n");
}
