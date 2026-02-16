"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "class User < ApplicationRecord",
        "  validates :email, presence: true",
        "end",
        "user = User.where(email: email).first"
    ].join("\n");
}
