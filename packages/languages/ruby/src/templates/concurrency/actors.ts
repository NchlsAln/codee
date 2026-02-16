export function actorsTemplate(): string {
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
