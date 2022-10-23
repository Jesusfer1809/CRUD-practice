import React from "react";
import Head from "next/head";
import { useContext } from "react";

import TasksContext from "../context/Tasks/TasksContext";

import Layout from "../components/Layout";

function newTask() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Task Man || New Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={false}>
        <div className="flex-grow">uwu</div>
      </Layout>
    </div>
  );
}

export default newTask;
