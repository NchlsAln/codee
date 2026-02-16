export function grapeApiTemplate(): string {
  return [
    "class HealthAPI < Grape::API",
    "  format :json",
    "",
    "  get :health do",
    "    { ok: true }",
    "  end",
    "end"
  ].join("\n");
}
