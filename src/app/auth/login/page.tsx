"use client";

import { signIn, useSession } from "next-auth/react";

import InputLogin from "@/app/components/auth/imputLogin";
import Link from "next/link";
// import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Login Andri Devoloper",
//   description: "Andri Devoloper",
// };

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      // Redirect to the desired page
      window.location.href = "/dashboard";
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-400 bg-gray-700 dark:bg-dark dark:text-light">
        {/* Brand */}
        <Link
          href=""
          className="inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
        >
          AN-DEV
        </Link>
        <main>
          <div className="w-full max-w-sm px-4 py-6 space-y-6 bg-gray-300 rounded-md dark:bg-darker">
            <h1 className="text-xl font-semibold text-center">Login</h1>
            {/* From Login */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <p style={{ color: "red" }}>{error}</p>}
              <input
                className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
              <input
                className="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                <button className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-blue-600 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
                  Login
                </button>
              </div>
            </form>
            {/* Register link */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Dont have an account yet?{" "}
              <Link
                href="../auth/register"
                className="text-blue-600 hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
