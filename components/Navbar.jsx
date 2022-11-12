import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

import { HiOutlineUserCircle } from "react-icons/hi";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import axios from "axios";
import UserDropdownMenu from "./UserDropdownMenu";

function Navbar({ isInIndex }) {
  const router = useRouter();
  const { data: session } = useSession();

  const [userOpen, setUserOpen] = useState(false);

  const toggleUser = () => {
    setUserOpen(!userOpen);
  };

  const changeImage = async () => {
    const res = await axios.patch("http://localhost:3000/api/users", {
      image: "https://i.imgur.com/vGJI9fL.png",
    });
    console.log(res);
    router.reload();
    // router.push("/newTask");
  };

  return (
    <div className="w-full px-4 py-6 bg-gray-900 text-white flex justify-between items-center border-b border-b-white relative">
      <div>
        <Link href="/">
          <a>
            <h1 className="font-medium py-2 md:text-lg">Task Manager ⏲</h1>
          </a>
        </Link>
      </div>
      <div className="flex space-x-4 xs:space-x-8 items-center sm:space-x-10">
        {session ? (
          <div className="flex items-center">
            <HiOutlineUserCircle
              onClick={toggleUser}
              className="w-8 h-8 cursor-pointer"
            />
          </div>
        ) : (
          <div className="flex space-x-4 items-center">
            Not signed in <br />
            <button
              className="px-4 py-2 bg-teal-500 rounded-md"
              onClick={signIn}
            >
              Sign in
            </button>
          </div>
        )}

        {isInIndex && (
          <div>
            <button
              onClick={() => router.push("/newTask")}
              disabled={!session}
              className="flex items-center space-x-2 bg-teal-500 px-2 py-2 rounded-md font-medium"
            >
              <AiOutlinePlus />
              <span>New Task</span>
            </button>
          </div>
        )}
      </div>

      <UserDropdownMenu userOpen={userOpen} />
    </div>
  );
}

export default Navbar;
