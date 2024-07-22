import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "../ClickOutside/ClickOutside";

import { IoChatbubblesOutline } from "react-icons/io5";

import { MdOutlineNotificationsNone } from "react-icons/md";
const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <li className="relative">
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          className="relative p-1 flex h-8.5 w-8.5 items-center justify-center rounded-full border-[1px] border-[#3C6794]  border-stroke bg-[#3C6794] hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
          href="#"
        >
          <span
            className={`absolute -right-0.5 -top-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${
              notifying === false ? "hidden" : "inline"
            }`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>

          <IoChatbubblesOutline className="h-4 w-4 text-[#F59752] font-bold stroke-bold" />
        </Link>

        {/* <!-- Dropdown Start --> */}
        {dropdownOpen && (
          <div
            className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3 p-2">
              <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
            </div>

            <ul className="flex h-auto flex-col overflow-y-auto">
              <li>
                <Link
                  className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  href="/messages"
                >
                  <div className="p-1 flex gap-4 text-sm items-center">
                    <div className="h-10 w-10 rounded-full">
                      <Image
                        width={112}
                        height={112}
                        src={
                          "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        }
                        alt="User"
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                    {/* Pesan */}
                    <div>
                      <h6 className="text-sm font-medium text-black ">
                        Mariya Desoja
                      </h6>
                      <p className="text-xs">I like your confidence 💪</p>
                      <p className="text-xs">2min ago</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                  href="/messages"
                >
                  <div className="p-1 flex gap-4 text-sm items-center">
                    <div className="h-10 w-10 rounded-full">
                      <Image
                        width={112}
                        height={112}
                        src={
                          "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        }
                        alt="User"
                        style={{
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                    {/* Pesan */}
                    <div>
                      <h6 className="text-sm font-medium text-black ">
                        Mariya Desoja
                      </h6>
                      <p className="text-xs">I like your confidence 💪</p>
                      <p className="text-xs">2min ago</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* <!-- Dropdown End --> */}
      </li>
    </ClickOutside>
  );
};

export default DropdownMessage;
