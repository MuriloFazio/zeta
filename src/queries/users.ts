import { User } from "@/lib/users.model";

export async function createUser(user: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    await User.create(user);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

//TODO
// Update user name
// Update user email
// Update user password
// Update user role
