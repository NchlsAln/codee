"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlTemplate = xmlTemplate;
function xmlTemplate() {
    return [
        "-module(xml_demo).",
        "-export([run/0]).",
        "run() ->",
        "  Xml = <<\"<user><name>Ada</name></user>\">>,",
        "  {Doc, _} = xmerl_scan:string(binary_to_list(Xml)),",
        "  io:format(\"~p~n\", [Doc])."
    ].join("\n");
}
