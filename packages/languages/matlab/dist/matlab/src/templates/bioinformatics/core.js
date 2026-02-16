"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bioinformaticsTemplate = bioinformaticsTemplate;
function bioinformaticsTemplate() {
    return [
        "seq = fastaread('seqs.fasta');",
        "disp(seq(1).Sequence)"
    ].join("\n");
}
