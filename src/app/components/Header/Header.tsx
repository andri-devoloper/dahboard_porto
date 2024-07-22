import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropdownNotification";
import DropdownMessage from "./DropdownMessage";
import DropdownUser from "./DropdownUser";

import { IoSearch } from "react-icons/io5";
import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";

import { useSession } from "next-auth/react";
import "next-auth";
import useFetchProfile from "../Profile/data/useFetchProfile";

declare module "next-auth" {
  interface Session {
    id: string;
    rules: string;
  }
}

interface ProfileProps {
  id: string;
}

interface HeaderProps extends ProfileProps {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Header = ({ id, sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const { data, error, loading } = useFetchProfile(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const getColorBg = (rules: string) => {
    if (rules.includes("Admin")) {
      return "bg-blue-500";
    } else if (rules.includes("Manager")) {
      return "bg-orange-500";
    } else if (rules.includes("User")) {
      return "bg-blue-300";
    }
    return "bg-white";
  };

  return (
    <header
      className={`sticky top-0 -z-40 flex w-full drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none ${
        data ? getColorBg(data.rules) : "bg-red-600"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 py-2 shadow-2 md:px-6 lg:px-7 2xl:px-11 ">
        <div className="flex justify-between items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm  text-lg items-center justify-center text-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            aria-label="Toggle Sidebar"
          >
            {sidebarOpen ? <FaRegHandPointLeft /> : <FaRegHandPointRight />}
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="./dashboard">
            <Image
              width={32}
              height={32}
              src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="w-full flex justify-end">
          <div className="hidden sm:block">
            <form
              action="https://formbold.com/s/unique_form_id"
              method="POST"
              className="border-2 px-[5px] py-[0.5px] rounded-full text-white"
            >
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full bg-transparent placeholder-white pl-4 pr-9 font-medium focus:outline-none xl:w-125 text-white"
                />
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  aria-label="Search"
                >
                  <IoSearch className="w-5 h-5 text-gray-100" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 md:gap-4  2xsm:gap-7 w-full ">
          <ul className="flex items-center gap-2 md:gap-3 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser id={id} />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
