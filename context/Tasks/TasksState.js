import React, { useReducer } from "react";
import TasksReducer from "./TasksReducer";
import TasksContext from "./TasksContext";

import { trimDate } from "../../utils/functions";

import axios from "axios";

const TaksState = (props) => {
  const initialState = {
    tasks: [
      {
        title: "Clean the house",
        description: "TF you want? It's self explanatory",
        id: "123456789",
        createdAt: trimDate(Date.now()),
      },
      {
        title: "Do your homework",
        description: "Maths and physics are urgent",
        id: "2468101214",
        createdAt: trimDate(Date.now()),
      },
    ],
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const createTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const getTask = (id) => {
    const task = state.tasks.find((task) => {
      return task.id === id;
    });
    return task;
  };

  const updateTask = (id, newTask) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id, newTask },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  //   const getProfile = async (id) => {
  //     const res = await axios.get("https://reqres.in/api/users/" + id);
  //     dispatch({
  //       type: GET_PROFILE,
  //       payload: res.data.data,
  //     });
  //   };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,

        createTask,
        getTask,
        updateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TaksState;
