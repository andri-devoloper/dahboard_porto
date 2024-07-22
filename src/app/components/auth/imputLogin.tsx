'use client'

import Link from "next/link";
import React, { useState } from "react";

function InputLogin() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <form action="#" className="space-y-6">
        <input
          className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className="flex items-center justify-between">
          {/* Remember me toggle */}
          <label className="flex items-center">
            <div className="relative inline-flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-10 h-4 z-10 transition bg-gray-200  rounded-full "
              />
              
            </div>
            <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
              Remember me
            </span>
          </label>
          <Link href="" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-blue-600 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default InputLogin;
