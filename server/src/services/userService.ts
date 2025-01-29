import User from "../models/userModel";

export class UserService {

  static async createUser(name: string) {
    try {
      const user = await User.create({ name });
      return user;
    } catch (error) {
      throw new Error("Error creating user");
    }
  }

  static async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Error fetching users");
    }
  }
}