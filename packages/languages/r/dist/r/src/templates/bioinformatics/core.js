"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bioinformaticsTemplate = bioinformaticsTemplate;
function bioinformaticsTemplate() {
    return [
        "library(Biostrings)",
        "seq <- DNAString('ACGTACGT')",
        "alphabetFrequency(seq)"
    ].join("\n");
}
