"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jpaTemplate = jpaTemplate;
function jpaTemplate() {
    return "import jakarta.persistence.Entity;\nimport jakarta.persistence.Id;\n\n@Entity\npublic class User {\n  @Id\n  private Long id;\n  private String name;\n\n  public Long getId() { return id; }\n  public void setId(Long id) { this.id = id; }\n  public String getName() { return name; }\n  public void setName(String name) { this.name = name; }\n}\n";
}
