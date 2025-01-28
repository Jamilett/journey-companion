import { Router } from "express";
import { ActivityController } from "../controllers/activityController";

const router = Router();

router.post("/", ActivityController.create);

router.get("/", ActivityController.getAll);

router.get("/:id", ActivityController.getById);

export default router;