import React from "react";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function UserDropdownMenu({ userOpen }) {
  const { data: session } = useSession();

  return (
    <div
      className={`absolute top-0 right-2 sm:right-3 md:right-4 mt-24 w-64 rounded-lg bg-white py-4 px-2 font-medium  text-black ${
        userOpen ? "block" : "hidden"
      } `}
    >
      {session && (
        <>
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="relative h-16 w-16  overflow-hidden rounded-full border border-gray-400">
              <Image
                ng-src={
                  session.user?.image || "https://i.imgur.com/62MNvNU.png"
                }
                src={session.user?.image || "https://i.imgur.com/62MNvNU.png"}
                layout="fill"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-600">Welcome!</span>

              <span className="text-lg">{session.user.name}</span>
            </div>
          </div>

          <ul className="mt-4 ">
            <li className="p-2">
              <Link href="/profile">
                <a href="#" className="cursor-pointer">
                  Edit Profile
                </a>
              </Link>
            </li>

            <li className="p-2">
              <a href="#" className="cursor-pointer">
                Account Activity
              </a>
            </li>

            <li className="p-2">
              <span onClick={signOut} className="cursor-pointer">
                Log Out
              </span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default UserDropdownMenu;
