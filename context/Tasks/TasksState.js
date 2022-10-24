import React, { useReducer } from "react";
import TasksReducer from "./TasksReducer";
import TasksContext from "./TasksContext";

import axios from "axios";

const TaksState = (props) => {
  const initialState = {
    tasks: [
      {
        name: "Clean the house",
        description: "TF you want? It's self explanatory",
        id: 123456789,
      },
      {
        name: "Do your homework",
        description: "Maths and physics are urgent",
        id: 2468101214,
      },
    ],
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  //   const nowIsAddedToCart = async (product) => {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       payload: product,
  //     });
  //   };

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
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TaksState;
