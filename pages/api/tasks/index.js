import { dbConnect } from "utils/mongoose";
import Task from "models/TaskModel";

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

dbConnect();

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    switch (req.method) {
      case "GET":
        if (session) {
          const tasks = await Task.find({ creator: session.user.email });
          console.log(tasks);

          return res.status(200).json({
            status: "success",
            data: {
              tasks,
            },
          });
        } else {
          return res.status(200).json({
            status: "success",
            data: {
              tasks: [],
            },
          });
        }

      case "POST":
        const newTask = await Task.create({
          ...req.body,
          creator: session.user.email,
        });
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
