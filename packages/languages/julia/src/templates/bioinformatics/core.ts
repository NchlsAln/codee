export function bioinformaticsTemplate(): string {
  return [
    "using BioSequences",
    "seq = dna\"ACGTACGT\"",
    "println(seq)"
  ].join("\n");
}
