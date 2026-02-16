"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "class CreateUsers < ActiveRecord::Migration[7.0]",
        "  def change",
        "    create_table :users do |t|",
        "      t.string :email, null: false",
        "      t.timestamps",
        "    end",
        "  end",
        "end"
    ].join("\n");
}
