export function httpServerTemplate(): string {
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
