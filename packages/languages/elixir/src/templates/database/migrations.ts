export function migrationsTemplate(): string {
  return [
    "defmodule Repo.Migrations.CreateUsers do",
    "  use Ecto.Migration",
    "  def change do",
    "    create table(:users) do",
    "      add :email, :string",
    "      timestamps()",
    "    end",
    "  end",
    "end"
  ].join("\n");
}
