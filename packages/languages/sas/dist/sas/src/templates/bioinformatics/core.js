"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bioinformaticsTemplate = bioinformaticsTemplate;
function bioinformaticsTemplate() {
    return [
        "proc fasta data=work.seqs out=work.fasta;",
        "run;"
    ].join("\n");
}
