export function repositoriesTemplate(): string {
  return "import org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n  String findNameById(long id);\n}\n";
}
