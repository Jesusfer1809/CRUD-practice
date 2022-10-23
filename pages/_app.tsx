import "../styles/globals.css";
import type { AppProps } from "next/app";

import TasksState from "../context/Tasks/TasksState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TasksState>
      <Component {...pageProps} />
    </TasksState>
  );
}

export default MyApp;
