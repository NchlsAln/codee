export function bioinformaticsTemplate(): string {
  return [
    "SELECT sample_id, gene, expression",
    "FROM gene_expression",
    "WHERE gene IN ('BRCA1', 'TP53');"
  ].join("\n");
}
