"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringsTemplate = stringsTemplate;
function stringsTemplate() {
    return [
        "Name = \"Ada Lovelace\"",
        "Upper = string:uppercase(Name)",
        "Len = length(Name)",
        "io:format(\"~s~n\", [Upper]),",
        "io:format(\"~p~n\", [Len])."
    ].join("\n");
}
