import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import TasksContext from "../context/Tasks/TasksContext";

function TaskComponent({ task, index }) {
  const { deleteTask } = useContext(TasksContext);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTask(task.id);
    toast.success("Task deleted", {
      style: {
        borderRadius: "2px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <Link href={`/task/${task.id}`} passHref>
      <div className="bg-gray-900 bg-opacity-50 px-4 py-4 flex justify-between space-x-8 rounded-md">
        <div className="flex items-center text-2xl">{index}</div>
        <div className="flex-grow flex flex-col space-y-5">
          <div className="flex justify-between items-center flex-wrap">
            <span className="text-lg font-medium mr-4 mb-3">{task.title}</span>
            <button className="bg-red-600 px-4 py-1 flex items-center space-x-1 rounded-sm">
              <BsTrash />
              <span onClick={handleDelete}>Delete</span>
            </button>
          </div>
          <div>
            <p className="block mb-2">{task.description}</p>
            <p className="text-xs text-gray-400 block">ID: {task.id}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TaskComponent;
