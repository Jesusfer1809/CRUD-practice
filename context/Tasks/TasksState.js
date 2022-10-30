import React, { useEffect, useReducer } from "react";
import TasksReducer from "./TasksReducer";
import TasksContext from "./TasksContext";

import { trimDate } from "../../utils/functions";

import axios from "axios";

const TaksState = (props) => {
  const initialState = {
    tasks: [],
  };
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  useEffect(() => {
    const tasksLC = JSON.parse(localStorage.getItem("tasks"));
    if (tasksLC) dispatch({ type: "ADD_TASK", payload: tasksLC });
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

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
