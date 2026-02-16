export function bioinformaticsTemplate(): string {
  return [
    "proc fasta data=work.seqs out=work.fasta;",
    "run;"
  ].join("\n");
}
