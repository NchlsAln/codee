export function migrationsTemplate(): string {
  return [
    "from alembic import op",
    "import sqlalchemy as sa",
    "",
    "def upgrade() -> None:",
    "    op.add_column('users', sa.Column('is_active', sa.Boolean(), nullable=False, server_default='1'))",
    "",
    "def downgrade() -> None:",
    "    op.drop_column('users', 'is_active')"
  ].join("\n");
}
