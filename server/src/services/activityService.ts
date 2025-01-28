import Activity from "../models/activityModel";

export class ActivityService {

  static async createActivity(title: string, description: string, peopleLimit: number) {
    try {
      const activity = await Activity.create({ title, description, peopleLimit });
      return activity;
    } catch (error) {
      throw new Error("Error creating activity");
    }
  }

  static async getAllActivities() {
    try {
      const activities = await Activity.findAll();
      return activities;
    } catch (error) {
      throw new Error("Error fetching activities");
    }
  }

  static async getActivityById(id: string) {
    try {
      const activity = await Activity.findByPk(id);
      return activity;
    } catch (error) {
      throw new Error("Error fetching activity");
    }
  }
}