"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return "import jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue;\nimport jakarta.persistence.GenerationType;\nimport jakarta.persistence.Id;\n\n@Entity\npublic class UserEntity {\n  @Id\n  @GeneratedValue(strategy = GenerationType.IDENTITY)\n  private Long id;\n  private String email;\n}\n";
}
