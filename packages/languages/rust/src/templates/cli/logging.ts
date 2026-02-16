export function cliLoggingTemplate(): string {
  return [
    "use tracing::info;",
    "use tracing_subscriber::FmtSubscriber;",
    "",
    "let subscriber = FmtSubscriber::new();",
    "tracing::subscriber::set_global_default(subscriber).unwrap();",
    "",
    "info!(\"service started\");"
  ].join("\n");
}
