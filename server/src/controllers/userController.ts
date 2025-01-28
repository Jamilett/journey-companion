import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
  
  static async create(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    try {
      const user = await UserService.createUser(name);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }
}