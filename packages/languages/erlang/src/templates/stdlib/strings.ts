export function stringsTemplate(): string {
  return [
    "Name = \"Ada Lovelace\"",
    "Upper = string:uppercase(Name)",
    "Len = length(Name)",
    "io:format(\"~s~n\", [Upper]),",
    "io:format(\"~p~n\", [Len])."
  ].join("\n");
}
