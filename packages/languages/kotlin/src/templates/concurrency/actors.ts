export function actorsTemplate(): string {
  return [
    "import kotlinx.coroutines.channels.Channel",
    "import kotlinx.coroutines.runBlocking",
    "",
    "data class Message(val value: Int)",
    "",
    "fun main() = runBlocking {",
    "  val mailbox = Channel<Message>(Channel.UNLIMITED)",
    "  mailbox.trySend(Message(42))",
    "  val msg = mailbox.receive()",
    "  println(msg.value)",
    "  mailbox.close()",
    "}"
  ].join("\n");
}
