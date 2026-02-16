export function actorsTemplate(): string {
  return [
    "using Akka.Actor;",
    "",
    "public class EchoActor : ReceiveActor {",
    "  public EchoActor() => Receive<string>(msg => Console.WriteLine(msg));",
    "}",
    "",
    "using var system = ActorSystem.Create(\"app\");",
    "var actor = system.ActorOf(Props.Create(() => new EchoActor()));",
    "actor.Tell(\"hello\");"
  ].join("\n");
}
