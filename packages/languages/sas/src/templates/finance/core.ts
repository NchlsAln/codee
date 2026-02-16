export function financeTemplate(): string {
  return [
    "proc sql;",
    "  select date, (price - lag(price)) / lag(price) as return",
    "  from work.prices;",
    "quit;"
  ].join("\n");
}
