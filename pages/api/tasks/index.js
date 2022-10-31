import { dbConnect } from "utils/mongoose";
import Task from "models/TaskModel";

dbConnect();

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        const tasks = await Task.find();
        console.log(tasks);
        return res.status(200).json({
          status: "success",
          data: {
            tasks,
          },
        });

      case "POST":
        const newTask = await Task.create(req.body);
        return res.status(200).json({
          status: "success",
          data: {
            task: newTask,
          },
        });

      default:
        return res.status(400).json({ msg: "this method is not suported" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}
