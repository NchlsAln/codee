"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliLoggingTemplate = cliLoggingTemplate;
function cliLoggingTemplate() {
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
