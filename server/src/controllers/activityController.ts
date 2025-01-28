import { Request, Response } from "express";
import { ActivityService } from './../services/activityService';

export class ActivityController {
  
  static async create(req: Request, res: Response) {
    const { title: name, description, peopleLimit } = req.body;

    if (!name || !description || !peopleLimit) {
      return res.status(400).json({ error: "Title, description, and peopleLimit are required" });
    }

    try {
      const activity = await ActivityService.createActivity(name, description, peopleLimit);
      res.status(201).json(activity);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const activities = await ActivityService.getAllActivities();
      res.status(200).json(activities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const activity = await ActivityService.getActivityById(id);

      if (!activity) {
        return res.status(404).json({ error: "Activity not found" });
      }

      res.status(200).json(activity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching activity" });
    }
  }
}