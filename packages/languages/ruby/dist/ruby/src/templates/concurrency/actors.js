"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return [
        "require 'concurrent'",
        "class EchoActor < Concurrent::Actor::Context",
        "  def on_message(message)",
        "    message",
        "  end",
        "end",
        "actor = EchoActor.spawn(:echo)",
        "puts actor.ask('ping')"
    ].join("\n");
}
