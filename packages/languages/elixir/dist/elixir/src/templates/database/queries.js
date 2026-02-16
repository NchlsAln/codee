"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
    return [
        "import Ecto.Query",
        "query = from u in User, where: u.email == ^email",
        "Repo.one(query)"
    ].join("\n");
}
