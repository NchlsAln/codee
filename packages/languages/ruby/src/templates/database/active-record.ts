export function activeRecordModelTemplate(): string {
  return [
    "class User < ApplicationRecord",
    "  validates :email, presence: true",
    "end",
    "",
    "User.where(active: true).order(:created_at)"
  ].join("\n");
}
