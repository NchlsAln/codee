export function asyncTemplate(): string {
  return [
    "use tokio::time::{sleep, Duration};",
    "",
    "async fn fetch(name: &str, delay_ms: u64) -> String {",
    "    sleep(Duration::from_millis(delay_ms)).await;",
    "    format!(\"{} done\", name)",
    "}",
    "",
    "#[tokio::main]",
    "async fn main() {",
    "    let (a, b) = tokio::join!(fetch(\"a\", 200), fetch(\"b\", 100));",
    "    println!(\"{:?}\", (a, b));",
    "}"
  ].join("\n");
}
