export function ffiNativeTemplate(): string {
  return [
    "-module(port_demo).",
    "-export([run/0]).",
    "run() ->",
    "  Port = open_port({spawn, \"./native_worker\"}, []),",
    "  port_command(Port, <<\"ping\">>),",
    "  receive {Port, {data, Data}} -> Data end."
  ].join("\n");
}
