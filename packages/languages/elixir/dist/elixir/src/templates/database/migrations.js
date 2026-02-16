"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
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
