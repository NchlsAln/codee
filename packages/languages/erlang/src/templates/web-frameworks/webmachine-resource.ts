export function webmachineResourceTemplate(): string {
  return [
    "-module(health_resource).",
    "-export([to_html/2]).",
    "",
    "to_html(ReqData, Context) ->",
    "  {\"ok\", ReqData, Context}."
  ].join("\n");
}
