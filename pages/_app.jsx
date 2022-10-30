import "../styles/globals.css";

import { useContext, useEffect } from "react";
import TasksContext from "../context/Tasks/TasksContext";

import TasksState from "../context/Tasks/TasksState";

function MyApp({ Component, pageProps }) {
  return (
    <TasksState>
      <Component {...pageProps} />
    </TasksState>
  );
}

export default MyApp;
