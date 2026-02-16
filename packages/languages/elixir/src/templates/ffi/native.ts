export function ffiNativeTemplate(): string {
  return [
    "# Rustler NIF example",
    "defmodule Math do",
    "  use Rustler, otp_app: :app, crate: 'math'",
    "  def add(_, _), do: :erlang.nif_error(:nif_not_loaded)",
    "end"
  ].join("\n");
}
