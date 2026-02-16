"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTemplate = jsonTemplate;
function jsonTemplate() {
    return [
        "<?php",
        "$payload = ['id' => 1, 'name' => 'Ada'];",
        "$json = json_encode($payload);",
        "$data = json_decode($json, true);",
        "var_dump($data);"
    ].join("\n");
}
