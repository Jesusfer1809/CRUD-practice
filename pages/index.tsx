import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";

import TasksContext from "../context/Tasks/TasksContext";
import Layout from "../components/Layout";

const Home = () => {
  const { tasks } = useContext(TasksContext);

  console.log(tasks);
  return (
    <div className="bg-gray-800">
      <Head>
        <title>Task Man</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout isInIndex={true}>
        <div className="flex-grow">uwu</div>
      </Layout>
    </div>
  );
};

export default Home;
