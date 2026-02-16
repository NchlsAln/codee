"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoenixControllerTemplate = phoenixControllerTemplate;
function phoenixControllerTemplate() {
    return [
        "defmodule MyAppWeb.HealthController do",
        "  use MyAppWeb, :controller",
        "",
        "  def show(conn, _params) do",
        "    json(conn, %{ok: true})",
        "  end",
        "end"
    ].join("\n");
}
