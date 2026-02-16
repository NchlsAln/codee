export function caqtiTemplate(): string {
  return [
    "open Caqti_request.Infix",
    "let find_user =",
    "  (Caqti_type.int ->. Caqti_type.string) \"SELECT name FROM users WHERE id = ?\""
  ].join("\n");
}
