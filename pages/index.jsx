import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import TasksContext from "../context/Tasks/TasksContext";
import Layout from "../components/Layout";
import TaskComponent from "../components/TaskComponent";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteModal from "components/DeleteModal";

import mongoose from "mongoose";

const Home = () => {
  const { data: session } = useSession();

  console.log(mongoose.models);

  const [modal, setModal] = useState({
    id: undefined,
    isOpened: false,
  });

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(`http://localhost:3000/api/tasks`);

    setTasks(res.data.data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const renderTasks = () => {
    if (!session) {
      return (
        <h2 className="text-2xl">Please login to start creating tasks!</h2>
      );
    }

    if (!tasks.length) {
      return <h2 className="text-2xl">You don't have any tasks!!</h2>;
    }

    return tasks.map((task, index) => (
      <TaskComponent task={task} index={index + 1} setModal={setModal} />
    ));
  };

  return (
    <div className="bg-gray-800 relative">
      <Head>
        <title>Task Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={true}>
        <div className="flex flex-col space-y-8">{renderTasks()}</div>
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <DeleteModal modalState={modal} setModal={setModal} />
    </div>
  );
};

export default Home;
