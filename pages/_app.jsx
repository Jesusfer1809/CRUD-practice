import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useContext, useEffect } from "react";
import TasksContext from "../context/Tasks/TasksContext";

import TasksState from "../context/Tasks/TasksState";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <TasksState>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </TasksState>
  );
}

export default MyApp;
