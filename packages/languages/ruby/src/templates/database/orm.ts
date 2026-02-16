export function ormTemplate(): string {
  return [
    "class User < ApplicationRecord",
    "  validates :email, presence: true",
    "end",
    "user = User.where(email: email).first"
  ].join("\n");
}
