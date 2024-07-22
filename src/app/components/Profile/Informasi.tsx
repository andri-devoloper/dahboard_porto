import React from "react";

const EmployeeInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 w-[44vh] md:w-full ">
      <div className="w-[100%] overflow-x-auto">
        {/* Basic */}
        <div className="mb-7 ">
          <h2 className="text-lg font-semibold text-gray-700 mb-5">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-blue-500 mb-3">Hire Date</p>
              <p className="text-sm font-medium bg-gray-800 text-white rounded px-2 py-1 inline-block">
                August 28, 2013
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-500 mb-3">Worked for</p>
              <p className="text-sm font-medium bg-gray-800 text-white px-2 py-1 inline-block rounded">
                7 years, 1 month
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-500 mb-3">Employee ID</p>
              <p className="text-sm font-medium bg-gray-800 text-white px-2 py-1 inline-block rounded">
                3156
              </p>
            </div>
            <div>
              <p className="text-sm text-blue-500 mb-3">SSN</p>
              <p className="text-sm font-medium bg-gray-800 text-white px-2 py-1 inline-block rounded">
                XXX-XX-3561
              </p>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="border-b-[1px] border-gray-300 w-full mb-8"></div>
        {/* Personal */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-5">
            Personal Information
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 justify-center items-center gap-2">
            <div className="col-span-1">
              <p className="text-xs text-blue-500 mb-2">Birth Date</p>
              <p className="text-xs font-medium border-b-2">12/12/65</p>
            </div>
            <div className="col-span-1">
              <p className="text-xs text-blue-500 mb-2">Address</p>
              <p className="text-xs font-medium border-b-2">
                315N Crestwater Lane
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-xs text-blue-500 mb-2">-</p>
              <p className="text-xs font-medium border-b-2 text-gray-300">
                Street 2
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-xs text-blue-500 mb-2">-</p>
              <p className="text-xs font-medium border-b-2">West Jordan</p>
            </div>
            <div className="col-span-1">
              <p className="text-xs text-blue-500 mb-2">-</p>
              <p className="text-xs font-medium border-b-2">Co</p>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="border-b-[1px] border-gray-300 w-full mb-8"></div>
        {/* Occupation */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Occupation Information
          </h2>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="bg-blue-200 rounded-full p-2 mr-2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-medium">Full-Time</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-200 rounded-full p-2 mr-2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-medium">Engineering</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-200 rounded-full p-2 mr-2">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-medium">Seattle, WA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
