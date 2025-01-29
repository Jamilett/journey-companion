import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

router.post("/", UserController.create);

router.get("/", UserController.getAll);

export default router;