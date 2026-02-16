"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return "import akka.actor.AbstractActor;\nimport akka.actor.ActorRef;\nimport akka.actor.ActorSystem;\nimport akka.actor.Props;\n\npublic class ActorSample {\n  static class Printer extends AbstractActor {\n    @Override\n    public Receive createReceive() {\n      return receiveBuilder().match(Integer.class, value -> System.out.println(value)).build();\n    }\n  }\n\n  public static void main(String[] args) {\n    ActorSystem system = ActorSystem.create(\"demo\");\n    ActorRef printer = system.actorOf(Props.create(Printer.class));\n    printer.tell(42, ActorRef.noSender());\n  }\n}\n";
}
