import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import TasksContext from "../context/Tasks/TasksContext";
import { useRouter } from "next/router";

function TaskEditor({ isEditing, prevTask }) {
  const { createTask, updateTask } = useContext(TasksContext);
  const router = useRouter();

  const [task, setTask] = useState(
    isEditing ? prevTask : { title: "", description: "" }
  );

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.title === "")
      return toast.error("Task must have a title.", {
        style: {
          borderRadius: "2px",
          background: "#333",
          color: "#fff",
        },
      });

    if (!isEditing) {
      createTask(task);
      toast.success("New task created!!", {
        style: {
          borderRadius: "2px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      updateTask(task.id, task);
      toast.success("Task updated!!", {
        style: {
          borderRadius: "2px",
          background: "#333",
          color: "#fff",
        },
      });
    }

    router.push("/");
  };
  return (
    <div className="px-4">
      <h2 className="text-xl font-medium block">
        {isEditing ? "Edit Task" : "New Task"}
      </h2>
      <form
        action="#"
        onSubmit={handleSubmit}
        className=" mt-12 flex flex-col space-y-6"
      >
        <fieldset>
          <label htmlFor="title" className="block mb-1 text-lg">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Task title..."
            onChange={handleChange}
            value={task?.title}
            className="w-full px-4 py-2 rounded-sm text-gray-900"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description" className="block mb-1 text-lg">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="3"
            onChange={handleChange}
            value={task?.description}
            placeholder="Task description..."
            className="w-full px-4 py-2 rounded-sm text-gray-900"
          ></textarea>
        </fieldset>

        <button className="w-full py-2 bg-teal-500 block rounded-sm">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskEditor;