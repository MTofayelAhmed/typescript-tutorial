// interface discussion
type User = {
  name: string;
  id: number;
};

const user1: User = {
  name: "ahmed",
  id: 2345,
};

type Role = {
  role: "admin" | "user";
};

type userWithRole = User & Role;
