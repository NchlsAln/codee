"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliArgsTemplate = cliArgsTemplate;
function cliArgsTemplate() {
    return [
        "(def args *command-line-args*)",
        "(println args)"
    ].join("\n");
}
