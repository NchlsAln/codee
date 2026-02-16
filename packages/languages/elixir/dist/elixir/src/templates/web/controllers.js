"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerTemplate = controllerTemplate;
function controllerTemplate() {
    return [
        "defmodule HealthController do",
        "  use Phoenix.Controller",
        "  def index(conn, _params) do",
        "    json(conn, %{ok: true})",
        "  end",
        "end"
    ].join("\n");
}
