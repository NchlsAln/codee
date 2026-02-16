"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "{:ok, pid} = Ecto.Adapters.SQL.Sandbox.start_owner!(Repo)",
        "IO.inspect(pid)"
    ].join("\n");
}
