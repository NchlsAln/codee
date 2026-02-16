export function supervisionTemplate(): string {
  return [
    "children = [Counter]",
    "Supervisor.start_link(children, strategy: :one_for_one)"
  ].join("\n");
}
