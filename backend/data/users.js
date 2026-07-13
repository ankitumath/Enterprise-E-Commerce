import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@enterprise.com",
    password: bcrypt.hashSync("Admin@123", 10),
    role: "admin",
  },

  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("User@123", 10),
    role: "customer",
  },

  {
    name: "Emma Watson",
    email: "emma@example.com",
    password: bcrypt.hashSync("User@123", 10),
    role: "customer",
  },
];

export default users;