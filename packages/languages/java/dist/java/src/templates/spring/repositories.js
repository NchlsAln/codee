"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositoriesTemplate = repositoriesTemplate;
function repositoriesTemplate() {
    return "import org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  String findNameById(long id);\n}\n";
}
