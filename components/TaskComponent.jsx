import Link from "next/link";

import React from "react";

import { BsTrash } from "react-icons/bs";

function TaskComponent({ task, index, setModal }) {
  const handleDelete = async (e) => {
    e.stopPropagation();

    setModal({ id: task._id, isOpened: true });
  };

  return (
    <Link href={`/task/${task._id}`} passHref>
      <div className="bg-gray-900 bg-opacity-50 px-4 py-4 flex justify-between space-x-8 rounded-md cursor-pointer">
        <div className="flex items-center text-2xl">{index}</div>
        <div className="flex-grow flex flex-col space-y-5">
          <div className="flex justify-between items-center flex-wrap">
            <span className="text-lg font-medium mr-4 mb-3">{task.title}</span>
            <button
              className="bg-red-600 px-4 py-1 flex items-center space-x-1 rounded-sm"
              onClick={handleDelete}
            >
              <BsTrash />
              <span>Delete</span>
            </button>
          </div>
          <div>
            <p className="block mb-2">{task.description}</p>
            <p className="text-xs text-gray-400 block">ID: {task._id}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TaskComponent;
