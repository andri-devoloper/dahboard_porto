"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { ChangeEvent, FormEvent } from "react";

function InputRegister() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [formValues, setFormValues] = useState({});

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((old) => ({ ...old, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Form Values:", formValues);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      // if (!res.ok) return alert("register failed");

      setFormValues({});

      console.log(setFormValues);
      return signIn(undefined, { callbackUrl: "/" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
          type="text"
          name="name"
          onChange={handleInput}
          placeholder="Your Name"
        />
        <input
          className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
          type="email"
          name="email"
          onChange={handleInput}
          placeholder="Email address"
        />
        <input
          className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
          type="password"
          name="password"
          onChange={handleInput}
          placeholder="Password"
        />
        <input
          className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
          type="password"
          onChange={handleInput}
          name="confirm"
          placeholder="Confirm Password"
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
              I accept the
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
            </span>
          </label>
        </div>
        <div>
          <button className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-blue-600 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default InputRegister;
