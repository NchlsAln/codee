"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "defmodule User do",
        "  use Ecto.Schema",
        "  schema \"users\" do",
        "    field :email, :string",
        "  end",
        "end"
    ].join("\n");
}
