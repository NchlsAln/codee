export function websocketsTemplate(): string {
  return [
    "use axum::extract::ws::{Message, WebSocket, WebSocketUpgrade};",
    "use axum::response::IntoResponse;",
    "",
    "async fn ws_handler(ws: WebSocketUpgrade) -> impl IntoResponse {",
    "    ws.on_upgrade(handle_socket)",
    "}",
    "",
    "async fn handle_socket(mut socket: WebSocket) {",
    "    while let Some(Ok(Message::Text(text))) = socket.recv().await {",
    "        let _ = socket.send(Message::Text(format!(\"echo: {}\", text))).await;",
    "    }",
    "}"
  ].join("\n");
}
