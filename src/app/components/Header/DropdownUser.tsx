import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickOutside from "../ClickOutside/ClickOutside";
import { FaRegUser } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import useFetchProfile from "../Profile/data/useFetchProfile";

interface ProfileProps {
  id: string;
}
const DropdownUser = ({ id }: ProfileProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const { data: session, status } = useSession();
  const { data, error, loading } = useFetchProfile(id);

  // const [tampilDataProfile, setTampilDataProfile] = useState<
  //   { position: string }[]
  // >([]);

  // const fetchDataProfile = async () => {
  //   try {
  //     const res = await fetch("/api/profile/profil_data");
  //     if (!res.ok) {
  //       throw new Error("Failed to fetch profile data.");
  //     }
  //     const dataProfile = await res.json();
  //     setTampilDataProfile(dataProfile);
  //     // console.log("Data Profile:", dataProfile);
  //   } catch (error) {
  //     console.error("Error fetching profile data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDataProfile();
  // }, []);

  // const [listData, setListData] = useState({ position: "" });

  // useEffect(() => {
  //   if (session && tampilDataProfile.length > 0) {
  //     const userData = tampilDataProfile[0];
  //     setListData({
  //       position: userData.position || "",
  //     });
  //   } else {
  //     setListData({ position: "" });
  //   }
  // }, [session, tampilDataProfile]);

  // console.log("ini darta", listData.position);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {data?.name || "none"}
          </span>
          <span className="block text-xs text-gray-200">
            {data?.rules || "none"}
          </span>
        </span>

        <span className="h-10 w-10 rounded-full">
          <Image
            width={100}
            height={100}
            src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      {dropdownOpen && (
        <div
          className={`absolute z-50 right-0 mt-2 flex w-max flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-3 border-b border-stroke px-2 py-3 dark:border-strokedark">
            <li className="max-w-30  p-2">
              <Link
                href="/dashboard/Profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-md"
              >
                <div className="text-sm">
                  <FaRegUser className="w-4 h-4 text-sm font-bold" />
                </div>
                My Profile
              </Link>
            </li>
            <li className="max-w-30  p-2">
              <Link
                href="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-md"
              >
                <div className="text-sm">
                  <TiContacts className="w-4 h-4 text-sm font-bold" />
                </div>
                My Contacts
              </Link>
            </li>
            <li className="max-w-30  p-2">
              <Link
                href="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-sm"
              >
                <div className="text-sm">
                  <IoSettingsOutline className="w-4 h-4 text-sm font-bold" />
                </div>
                Account Settings
              </Link>
            </li>
          </ul>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-3.5 px-4 py-3 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-sm"
          >
            <div className="text-sm">
              <TbLogout2 className="w-4 h-4 text-sm font-bold" />
            </div>
            Log Out
          </button>
        </div>
      )}
      {/* <!-- Dropdown End --> */}
    </ClickOutside>
  );
};

export default DropdownUser;
