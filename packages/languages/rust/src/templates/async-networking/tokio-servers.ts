export function tokioServersTemplate(): string {
  return [
    "use tokio::net::TcpListener;",
    "use tokio::io::{AsyncReadExt, AsyncWriteExt};",
    "",
    "#[tokio::main]",
    "async fn main() -> Result<(), Box<dyn std::error::Error>> {",
    '    let listener = TcpListener::bind("127.0.0.1:8080").await?;',
    "    loop {",
    "        let (mut socket, _) = listener.accept().await?;",
    "        tokio::spawn(async move {",
    "            let mut buf = [0u8; 1024];",
    "            let _ = socket.read(&mut buf).await;",
    '            let _ = socket.write_all(b"ok").await;',
    "        });",
    "    }",
    "}",
  ].join("\n");
}
