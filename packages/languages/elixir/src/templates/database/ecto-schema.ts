export function ectoSchemaTemplate(): string {
  return [
    "defmodule MyApp.Accounts.User do",
    "  use Ecto.Schema",
    "",
    "  schema \"users\" do",
    "    field :email, :string",
    "    timestamps()",
    "  end",
    "end"
  ].join("\n");
}
