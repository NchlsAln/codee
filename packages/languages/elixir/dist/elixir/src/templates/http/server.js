"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "defmodule HelloPlug do",
        "  import Plug.Conn",
        "  def init(opts), do: opts",
        "  def call(conn, _opts), do: send_resp(conn, 200, \"ok\")",
        "end",
        "",
        "{:ok, _} = Plug.Cowboy.http(HelloPlug, [])"
    ].join("\n");
}
