"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import ClickOutside from "../ClickOutside/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { FaRegHandPointLeft } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: <RxDashboard />,
        label: "Dashboard",
        route: "/dashboard",
      },
      {
        icon: <FaMedal />,
        label: "Leaderboard",
        route: "/dashboard/leaderboard",
      },

      {
        icon: <IoSettingsOutline />,
        label: "Settings",
        route: "/dashboard/settings",
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: <FiPieChart />,
        label: "Chart",
        route: "/chart",
      },
    ],
  },
  {
    name: "Profile",
    menuItems: [
      {
        icon: <CgProfile />,
        label: "Profile",
        route: "/dashboard/Profile",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
  // bg-[#3C6794]
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-max md:w-64 bg-[#3C6794]   flex-col overflow-y-hidden grid-col-1 duration-300 ease-linear  lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 mt-4 mb-5 px-10 py-5.5 lg:py-6.5">
          <Link href="/dashboard">
            <Image
              width={40}
              height={40}
              src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <FaRegHandPointLeft />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear border-t-[1.5px] mb-4">
          {/* <!-- Sidebar Menu --> */}
          <nav className="px-4 mt-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5 ">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
