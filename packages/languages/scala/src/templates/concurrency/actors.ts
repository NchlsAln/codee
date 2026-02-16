export function actorsTemplate(): string {
  return [
    "import akka.actor.typed.ActorSystem",
    "import akka.actor.typed.scaladsl.Behaviors",
    "",
    "val behavior = Behaviors.receiveMessage[String] { msg =>",
    "  println(s\"got:$msg\")",
    "  Behaviors.same",
    "}",
    "",
    "val system = ActorSystem(behavior, \"echo\")",
    "system ! \"hello\""
  ].join("\n");
}
