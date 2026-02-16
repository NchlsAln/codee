export function mnesiaTemplate(): string {
  return [
    "mnesia:create_schema([node()]).",
    "mnesia:start().",
    "mnesia:create_table(user, [{attributes, record_info(fields, user)}])."
  ].join("\n");
}
