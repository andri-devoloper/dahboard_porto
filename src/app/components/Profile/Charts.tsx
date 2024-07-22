import { GetServerSideProps } from "next";
import useFetchProfile from "./data/useFetchProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiGearSix } from "react-icons/pi";
import Modal from "./ModalCharts";
import { InputModeCharts } from "./InputModal";

import AnimationComponent from "./AnimateText";

interface ProfileProps {
  id: string;
}

const Profile = ({id} : ProfileProps) => {
  const { data, error, loading } = useFetchProfile(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  // console.log("Name:", data?.name);

  return (
    <div className="grid grid-cols-3 h-full w-full relative">
      <div className="p-1 w-full flex items-center">
        <Image
          src="https://tse4.mm.bing.net/th?id=OIP.lVhja_V-PSfUxFWe9DCLqgAAAA&pid=Api&P=0&h=220"
          width={100}
          height={100}
          alt="Profile"
          className="md:w-52 md:h-52 w-20 h-20 rounded-full mr-4"
        />
      </div>
      <div className="w-full grid col-span-2 items-center gap-1 md:gap-5">
        {/* Name */}
        <div className="w-full flex items-center">
          <div className="text-gray-800 font-bold text-sm md:text-lg">
            {data?.name || "N/A"}
          </div>
          <div className="md:px-3 md:py-1.5 px-2.5 py-1 text-xs font-bold md:text-sm text-white ms-10 bg-green-300 rounded-md md:rounded-lg">
            Active
          </div>
        </div>
        {/* Role */}
        <div className="w-full flex items-center">
          <div className="text-gray-400 text-xs md:text-sm">
            Role:{" "}
            <span className="font-bold text-gray-600">
              {data?.rules || "N/A"}
            </span>
          </div>
        </div>
        {/* Position */}
        <div className="text-gray-400 text-xs md:text-sm">
          Position:{" "}
          <span className="font-bold text-gray-600">
            {data?.position || "N/A"}
          </span>
        </div>
        {/* Email */}
        <div className="text-gray-400 text-xs md:text-sm">
          Email:{" "}
          <span className="font-bold text-gray-600">
            {data?.email || "N/A"}
          </span>
        </div>
        {/* Phone */}
        <div className="text-gray-400 text-xs md:text-sm">
          Phone:{" "}
          <span className="font-bold text-gray-600">
            {data?.phone || "N/A"}
          </span>
        </div>
        {/* Company */}
        <div className="text-gray-400 text-xs md:text-sm">
          Company:{" "}
          <span className="font-bold text-gray-600">
            {data?.company || "N/A"}
          </span>
        </div>
      </div>

      <div className="p-2 absolute right-5 top-0 text-base md:text-xl cursor-pointer">
        <button onClick={handleOpenModal}>
          <PiGearSix />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <InputModeCharts />
      </Modal>
    </div>
  );
};

export default Profile;
