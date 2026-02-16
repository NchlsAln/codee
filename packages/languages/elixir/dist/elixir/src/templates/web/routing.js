"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "defmodule Router do",
        "  use Plug.Router",
        "  plug :match",
        "  plug :dispatch",
        "  get \"/health\" do",
        "    send_resp(conn, 200, \"ok\")",
        "  end",
        "end"
    ].join("\n");
}
