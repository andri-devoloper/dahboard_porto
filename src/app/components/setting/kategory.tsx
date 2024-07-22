"use client";

import React, { useEffect, useState } from "react";

function Kategory() {
  const [formValues, setFormValues] = useState({
    category: "",
  });

  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 60000);

  //     return () => clearTimeout(timer);
  //   }, []);

  const handleChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setLoading(true);

    console.log("Form Values:", formValues);
    try {
      const response = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        throw new Error("Failed to create data");
      }
      console.log("Data submitted successfully");
      const resul = await response.json();

      console.log("Response:", resul);

      setFormValues({ category: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Category
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Category...."
            name="category"
            value={formValues.category}
            onChange={handleChenge}
          />
        </div>
        <button className="px-4 py-2 rounded-lg text-white font-medium bg-blue-400">
          Seve
        </button>
      </form>
    </div>
  );
}

export default Kategory;
