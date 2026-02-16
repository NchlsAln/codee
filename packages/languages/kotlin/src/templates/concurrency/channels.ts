export function channelsTemplate(): string {
  return [
    "import kotlinx.coroutines.channels.Channel",
    "import kotlinx.coroutines.runBlocking",
    "",
    "fun main() = runBlocking {",
    "  val channel = Channel<Int>(2)",
    "  channel.send(1)",
    "  channel.send(2)",
    "  println(channel.receive())",
    "  channel.close()",
    "}"
  ].join("\n");
}
