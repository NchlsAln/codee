export function httpRestTemplate(): string {
  return [
    "defmodule UserController do",
    "  use Phoenix.Controller",
    "  def show(conn, %{'id' => id}) do",
    "    json(conn, %{id: id})",
    "  end",
    "end"
  ].join("\n");
}
