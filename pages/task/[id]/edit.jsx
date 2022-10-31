import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "../../../components/Layout";
import TaskEditor from "../../../components/TaskEditor";
import TasksContext from "../../../context/Tasks/TasksContext";

function TaskEdit({ task }) {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Task Man || Edit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={false}>
        <TaskEditor isEditing prevTask={task} />
      </Layout>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default TaskEdit;

export async function getServerSideProps(ctx) {
  const res = await axios.get(
    `${process.env.BASE_URL}/api/tasks/${ctx.params.id}`
  );

  return {
    props: {
      task: res.data.data.task,
    },
  };
}
