"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
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
