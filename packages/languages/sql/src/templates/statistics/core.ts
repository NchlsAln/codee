export function statisticsTemplate(): string {
  return [
    "SELECT AVG(amount) AS avg_amt,",
    "       STDDEV(amount) AS std_amt",
    "FROM payments;"
  ].join("\n");
}
