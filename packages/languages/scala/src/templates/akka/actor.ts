export function akkaActorTemplate(): string {
  return [
    "import akka.actor.{Actor, ActorSystem, Props}",
    "",
    "class Greeter extends Actor {",
    "  def receive: Receive = {",
    "    case name: String => sender() ! s\"Hello, ${'$'}name\"",
    "  }",
    "}",
    "",
    "val system = ActorSystem(\"demo\")",
    "val greeter = system.actorOf(Props[Greeter]())",
    "" 
  ].join("\n");
}
