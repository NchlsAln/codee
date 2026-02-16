export function controllerTemplate(): string {
  return [
    "defmodule HealthController do",
    "  use Phoenix.Controller",
    "  def index(conn, _params) do",
    "    json(conn, %{ok: true})",
    "  end",
    "end"
  ].join("\n");
}
