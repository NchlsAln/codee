"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "-module(math_demo).",
        "-export([run/0]).",
        "run() ->",
        "  Values = [1,4,9,16],",
        "  Roots = [math:sqrt(V) || V <- Values],",
        "  Avg = lists:sum(Values) / length(Values),",
        "  io:format(\"~p ~p~n\", [Roots, Avg])."
    ].join("\n");
}
