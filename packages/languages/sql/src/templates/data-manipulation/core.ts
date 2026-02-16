export function dataManipulationTemplate(): string {
  return [
    "SELECT group_id, AVG(score) AS avg_score",
    "FROM scores",
    "WHERE score > 80",
    "GROUP BY group_id;"
  ].join("\n");
}
