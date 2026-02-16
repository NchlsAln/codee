export function phoenixControllerTemplate(): string {
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
