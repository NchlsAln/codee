export function ormTemplate(): string {
  return [
    "<?php",
    "use Illuminate\\Database\\Eloquent\\Model;",
    "",
    "final class User extends Model",
    "{",
    "  protected $table = 'users';",
    "  protected $fillable = ['email', 'name'];",
    "}",
    "",
    "$user = User::query()->where('email', $email)->first();"
  ].join("\n");
}
