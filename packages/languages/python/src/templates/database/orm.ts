export function ormTemplate(): string {
  return [
    "from sqlalchemy import Column, Integer, String, create_engine",
    "from sqlalchemy.orm import declarative_base, sessionmaker",
    "",
    "Base = declarative_base()",
    "",
    "class User(Base):",
    "    __tablename__ = 'users'",
    "    id = Column(Integer, primary_key=True)",
    "    email = Column(String, unique=True)",
    "",
    "engine = create_engine('sqlite:///app.db')",
    "Session = sessionmaker(bind=engine)",
    "",
    "Base.metadata.create_all(engine)",
    "with Session() as session:",
    "    session.add(User(email='ada@example.com'))",
    "    session.commit()"
  ].join("\n");
}
