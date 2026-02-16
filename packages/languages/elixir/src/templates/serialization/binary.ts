export function binaryTemplate(): string {
  return [
    "data = :erlang.term_to_binary(%{id: 1})",
    "decoded = :erlang.binary_to_term(data)",
    "IO.inspect(decoded)"
  ].join("\n");
}
