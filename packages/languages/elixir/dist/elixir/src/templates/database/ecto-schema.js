"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ectoSchemaTemplate = ectoSchemaTemplate;
function ectoSchemaTemplate() {
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
