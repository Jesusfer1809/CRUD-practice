import React, { useContext } from "react";
import toast from "react-hot-toast";
import TasksContext from "../context/Tasks/TasksContext";

function DeleteModal({ modalState, setModal }) {
  const { deleteTask } = useContext(TasksContext);

  const closeModal = () => {
    setModal({ id: undefined, isOpened: false });
  };

  const confirmDelete = async () => {
    deleteTask(modalState.id);
    toast.success("Task deleted", {
      style: {
        borderRadius: "2px",
        background: "#333",
        color: "#fff",
      },
    });

    closeModal();
  };

  return (
    <div
      className={`absolute top-0 left-0 z-[99999] bg-gray-900 w-full h-full bg-opacity-50 ${
        modalState.isOpened ? "flex" : "hidden"
      } justify-center items-center px-4`}
      onClick={closeModal}
    >
      <div
        className="w-full bg-white px-4 py-10 rounded-md flex flex-col space-y-8 sm:w-4/5 md:w-3/5 lg:w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-xl font-medium">
          Do you want to delete this task?
        </span>

        <div className=" flex justify-between px-4 sm:px-12">
          <button
            className="bg-red-700 px-4 py-2 rounded-md text-white border border-red-700 font-medium"
            onClick={confirmDelete}
          >
            Yes, delete
          </button>
          <button
            className=" px-4 py-2 rounded-md  border border-red-700 font-medium"
            onClick={closeModal}
          >
            No, go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
