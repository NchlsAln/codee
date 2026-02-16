"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "defmodule Schema do",
        "  use Absinthe.Schema",
        "  query do",
        "    field :ping, :string do",
        "      resolve fn _, _, _ -> {:ok, \"pong\"} end",
        "    end",
        "  end",
        "end"
    ].join("\n");
}
