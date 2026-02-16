"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelsTemplate = channelsTemplate;
function channelsTemplate() {
    return [
        "{:ok, channel} = GenServer.start_link(fn -> [] end, name: :queue)",
        "GenServer.cast(channel, {:push, :job1})"
    ].join("\n");
}
