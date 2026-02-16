export function connectionsTemplate(): string {
  return [
    "{:ok, pid} = Ecto.Adapters.SQL.Sandbox.start_owner!(Repo)",
    "IO.inspect(pid)"
  ].join("\n");
}
