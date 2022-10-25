import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../../../components/Layout";
import TaskEditor from "../../../components/TaskEditor";
import TasksContext from "../../../context/Tasks/TasksContext";

function TaskEdit({ id }) {
  const { getTask, tasks } = useContext(TasksContext);

  const [task, setTask] = useState(getTask(id));

  return (
    <div className="bg-gray-800">
      <Head>
        <title>Task Man || Edit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={false}>
        <div className="flex-grow w-full py-12">
          <TaskEditor isEditing prevTask={task} />
        </div>
      </Layout>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default TaskEdit;

export const getServerSideProps = (ctx) => {
  const id = ctx.params.id;

  return {
    props: {
      id,
    },
  };
};
