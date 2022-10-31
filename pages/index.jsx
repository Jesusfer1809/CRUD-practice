import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import TasksContext from "../context/Tasks/TasksContext";
import Layout from "../components/Layout";
import TaskComponent from "../components/TaskComponent";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DeleteModal from "components/DeleteModal";

const Home = ({ tasks }) => {
  const [modal, setModal] = useState({
    id: undefined,
    isOpened: false,
  });

  return (
    <div className="bg-gray-800 relative">
      <Head>
        <title>Task Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={true}>
        <div className="flex flex-col space-y-8">
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <TaskComponent
                task={task}
                index={index + 1}
                setModal={setModal}
              />
            ))
          ) : (
            <h2 className="text-2xl">You don't have any tasks!!</h2>
          )}
        </div>
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <DeleteModal modalState={modal} setModal={setModal} />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.BASE_URL}/api/tasks`);

  return {
    props: {
      tasks: res.data.data.tasks,
    },
  };
}
