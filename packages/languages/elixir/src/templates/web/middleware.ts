export function middlewareTemplate(): string {
  return [
    "defmodule AuthPlug do",
    "  import Plug.Conn",
    "  def init(opts), do: opts",
    "  def call(conn, _opts) do",
    "    if get_req_header(conn, \"authorization\") == [] do",
    "      conn |> send_resp(401, \"unauthorized\") |> halt()",
    "    else",
    "      conn",
    "    end",
    "  end",
    "end"
  ].join("\n");
}
