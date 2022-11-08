import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function Navbar({ isInIndex }) {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="w-full px-4 py-6 bg-gray-900 text-white flex justify-between items-center border-b border-b-white">
      <div>
        <Link href="/">
          <a>
            <h1 className="font-medium py-2 md:text-lg">Task Manager ⏲</h1>
          </a>
        </Link>
      </div>

      {session ? (
        <div className="flex space-x-4 items-center">
          <span>
            Signed in as {session.user.email} <br />
          </span>

          <Image src={session.user.image} width={100} height={100} />

          <button
            className="px-4 py-2 bg-teal-500 rounded-md"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex space-x-4 items-center">
          Not signed in <br />
          <button
            className="px-4 py-2 bg-teal-500 rounded-md"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}

      {isInIndex && (
        <div>
          <button
            onClick={() => router.push("/newTask")}
            className="flex items-center space-x-2 bg-teal-500 px-2 py-2 rounded-md font-medium"
          >
            <AiOutlinePlus />
            <span>New Task</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
