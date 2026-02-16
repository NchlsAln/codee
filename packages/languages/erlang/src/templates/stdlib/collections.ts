export function collectionsTemplate(): string {
  return [
    "Nums = [1,2,3,4],",
    "Evens = [N || N <- Nums, N rem 2 =:= 0],",
    "Doubled = lists:map(fun(N) -> N * 2 end, Nums),",
    "Total = lists:sum(Nums),",
    "io:format(\"~p~n\", [Evens]),",
    "io:format(\"~p~n\", [Doubled]),",
    "io:format(\"~p~n\", [Total])."
  ].join("\n");
}
