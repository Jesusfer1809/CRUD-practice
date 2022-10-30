import { v4 as uuidv4 } from "uuid";
import { trimDate } from "../../utils/functions";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, ...payload],
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? payload.newTask : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    // case DELETE_FROM_CART:
    //   return { ...state, selectedUser: payload };

    default:
      return state;
  }
};
