export function bioinformaticsTemplate(): string {
  return [
    "library(Biostrings)",
    "seq <- DNAString('ACGTACGT')",
    "alphabetFrequency(seq)"
  ].join("\n");
}
