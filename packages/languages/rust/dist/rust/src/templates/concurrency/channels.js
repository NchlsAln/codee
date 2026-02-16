"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "use tokio::sync::mpsc;",
        "",
        "let (tx, mut rx) = mpsc::channel(4);",
        "tx.send(1).await.unwrap();",
        "",
        "if let Some(value) = rx.recv().await {",
        "    println!(\"{}\", value);",
        "}"
    ].join("\n");
}
