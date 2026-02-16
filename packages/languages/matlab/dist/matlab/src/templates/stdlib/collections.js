"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "nums = [1 2 3];",
        "cells = {'a', 'b', 'c'};",
        "s = struct('id', 1, 'value', 2);",
        "disp(mean(nums));"
    ].join("\n");
}
