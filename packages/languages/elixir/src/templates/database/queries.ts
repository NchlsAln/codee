export function queriesTemplate(): string {
  return [
    "import Ecto.Query",
    "query = from u in User, where: u.email == ^email",
    "Repo.one(query)"
  ].join("\n");
}
