export function channelsTemplate(): string {
  return [
    "{:ok, channel} = GenServer.start_link(fn -> [] end, name: :queue)",
    "GenServer.cast(channel, {:push, :job1})"
  ].join("\n");
}
