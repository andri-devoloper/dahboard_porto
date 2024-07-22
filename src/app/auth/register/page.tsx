"use client";

import Link from "next/link";
import React from "react";
// import { Metadata } from "next";
import InputRegister from "@/app/components/auth/imputRegister";



// export const metadata: Metadata = {
//   title: "Register Andri Devoloper",
//   description: "Andri Devoloper",
// };

export default function Register() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-400 bg-gray-700 dark:bg-dark dark:text-light">
        {/* Brand */}
        <Link
          href="../index.html"
          className="inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
        >
          AN-DEV
        </Link>
        <main>
          <div className="w-full max-w-sm px-4 py-6 space-y-6 bg-gray-300 rounded-md dark:bg-darker">
            <h1 className="text-xl font-semibold text-center">Register</h1>
            {/* From Register */}
            <InputRegister />
            {/* Login link */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="../auth/login"
                className="text-blue-600 hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
