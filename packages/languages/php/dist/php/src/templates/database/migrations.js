"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "<?php",
        "use Illuminate\\Database\\Migrations\\Migration;",
        "use Illuminate\\Database\\Schema\\Blueprint;",
        "use Illuminate\\Support\\Facades\\Schema;",
        "",
        "return new class extends Migration {",
        "  public function up(): void",
        "  {",
        "    Schema::create('users', function (Blueprint $table): void {",
        "      $table->id();",
        "      $table->string('email')->unique();",
        "      $table->timestamps();",
        "    });",
        "  }",
        "  public function down(): void",
        "  {",
        "    Schema::dropIfExists('users');",
        "  }",
        "};"
    ].join("\n");
}
