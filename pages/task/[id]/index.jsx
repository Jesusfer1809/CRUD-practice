import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import TasksContext from "../../../context/Tasks/TasksContext";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import axios from "axios";

function TaskShowcase({ task }) {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Task Man || {task?._id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={true}>
        <div className="">
          <Link href="/" className="block">
            <span className=" inline-block  text-blue-300 border-b border-b-blue-300 cursor-pointer">
              &larr; Back
            </span>
          </Link>
        </div>

        <div className="flex justify-between w-full mt-16">
          <span className="text-3xl font-medium">{task?.title}</span>
          <Link href={`/task/${task?._id}/edit`}>
            <div className="px-4 flex items-center rounded-md bg-teal-500 font-medium cursor-pointer">
              Edit
            </div>
          </Link>
        </div>

        <p className="block mt-10">{task?.description}</p>

        <div className="mt-20 text-sm">ID: {task?._id}</div>
        <div className="mt-4 text-sm">Created at: {task?.createdAt}</div>
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default TaskShowcase;

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
