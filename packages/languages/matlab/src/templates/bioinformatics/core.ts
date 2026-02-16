export function bioinformaticsTemplate(): string {
  return [
    "seq = fastaread('seqs.fasta');",
    "disp(seq(1).Sequence)"
  ].join("\n");
}
