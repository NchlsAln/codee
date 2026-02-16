"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesTemplate = servicesTemplate;
function servicesTemplate() {
    return "import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class UserService {\n  private final UserRepository repository;\n\n  @Autowired\n  public UserService(UserRepository repository) {\n    this.repository = repository;\n  }\n\n  public String findName(long id) {\n    return repository.findNameById(id);\n  }\n}\n";
}
