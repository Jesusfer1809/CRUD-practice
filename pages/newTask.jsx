import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head";
import Layout from "../components/Layout";
import TaskEditor from "../components/TaskEditor";

function newTask() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Task Man || New Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={false}>
        <TaskEditor />
      </Layout>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default newTask;
