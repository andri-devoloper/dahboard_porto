import Image from "next/image";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="bg-white px-4 py-1 rounded-lg h-full">
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Upcoming Events
          </h2>
          <button className="text-sm bg-orange-400 text-white px-4 py-1 rounded-lg">
            View All
          </button>
        </div>
        <div className="-mt-2 text-xs text-gray-400">
          <p>July 16, 2024</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-[21vh] overflow-y-auto shadow-scroll ">
        <div className="bg-blue-900 border-l-8 border-blue-400  text-white p-4 rounded-lg mb-2">
          <div className="flex justify-between items-center mb-2">
            <span>Design review</span>
            <div className="flex items-center bg-blue-400 p-[8px] rounded-full">
              <svg
                className="w-5 h-5 text-blue-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 14a4 4 0 00-4-4H6a4 4 0 000 8h8a4 4 0 004-4zM6 4a4 4 0 018 0 4 4 0 01-8 0z" />
              </svg>
            </div>
          </div>
          <div className="text-sm mb-2">9:00 AM — 10:00 AM</div>
          <div className="flex">
            <Image
              width={200}
              height={100}
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/32"
              alt="Avatar 1"
            />
            <Image
              width={200}
              height={100}
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/32"
              alt="Avatar 2"
            />
            <Image
              width={200}
              height={100}
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/32"
              alt="Avatar 3"
            />
          </div>
        </div>
        <div className="bg-blue-900 border-l-8 border-[#F2277D] text-white p-4 rounded-lg mb-2">
          <div className="flex justify-between items-center mb-2">
            <span>Design review</span>
            <div className="flex items-center bg-[#F2277D] p-[8px] rounded-full">
              <svg
                className="w-5 h-5 text-blue-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 14a4 4 0 00-4-4H6a4 4 0 000 8h8a4 4 0 004-4zM6 4a4 4 0 018 0 4 4 0 01-8 0z" />
              </svg>
            </div>
          </div>
          <div className="text-sm mb-2">9:00 AM — 10:00 AM</div>
          <div className="flex">
            <Image
              width={200}
              height={100}
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/32"
              alt="Avatar 1"
            />
            <Image
              width={200}
              height={100}
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/32"
              alt="Avatar 2"
            />
            <Image
              width={200}
              height={100}
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/32"
              alt="Avatar 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
