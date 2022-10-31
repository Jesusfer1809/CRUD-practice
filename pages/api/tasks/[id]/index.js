import { dbConnect } from "utils/mongoose";
import Task from "models/TaskModel";

dbConnect();
export default async function handler(req, res) {
  try {
    const id = req.query.id;

    switch (req.method) {
      case "GET":
        const task = await Task.findById(id);
        if (!task) {
          return res
            .status(404)
            .json({ message: "Task not found with that ID!" });
        }
        return res.status(200).json({
          status: "success",
          data: {
            task,
          },
        });

      case "PATCH":
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!updatedTask) {
          return res
            .status(404)
            .json({ message: "Task not found with that ID!" });
        }

        return res.status(200).json({
          status: "success",
          data: {
            task: updatedTask,
          },
        });

      case "DELETE":
        const deleteTask = await Task.findByIdAndDelete(id);
        if (!deleteTask) {
          return res
            .status(404)
            .json({ message: "Task not found with that ID!" });
        }
        return res.status(204).json({
          status: "success",
          data: null,
        });

      default:
        return res.status(400).json({
          message: "This method is not supported yet",
        });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}
