export function middlewareTemplate(): string {
  return [
    "class AuthMiddleware",
    "  def initialize(app)",
    "    @app = app",
    "  end",
    "",
    "  def call(env)",
    "    token = env['HTTP_AUTHORIZATION']",
    "    return [401, {}, ['unauthorized']] if token.to_s.empty?",
    "    @app.call(env)",
    "  end",
    "end"
  ].join("\n");
}
