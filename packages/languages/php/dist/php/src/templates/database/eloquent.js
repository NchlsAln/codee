"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eloquentModelTemplate = eloquentModelTemplate;
function eloquentModelTemplate() {
    return [
        "<?php",
        "namespace App\\Models;",
        "",
        "use Illuminate\\Database\\Eloquent\\Model;",
        "",
        "class User extends Model",
        "{",
        "  protected $fillable = ['name', 'email'];",
        "}",
        ""
    ].join("\n");
}
