export function ormTemplate(): string {
  return [
    "-module(db_orm).",
    "-export([user/1]).",
    "user(Id) ->",
    "  #{id => Id, email => <<\"user@example.com\">>} ."
  ].join("\n");
}
