import React from "react";

function TaskComponent({ task, index }) {
  return (
    <div className="bg-red-500 px-4 py-4 flex justify-between space-x-8">
      <div className="flex items-center text-2xl">{index}</div>
      <div className="flex-grow flex flex-col space-y-5">
        <div className="flex justify-between items-center flex-wrap">
          <span className="text-lg font-medium mr-4 mb-3">{task.name}</span>
          <button className="bg-blue-300 px-4 py-1">Delete</button>
        </div>
        <div>
          <p className="block mb-2">{task.description}</p>
          <p className="text-sm block">ID: {task.id}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskComponent;
