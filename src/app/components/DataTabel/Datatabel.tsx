"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";

import { data } from "./data";

const Data: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  const [filterStatus, setFilterStatus] = useState("All");

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h2 className="text-sm md:text-2xl font-semibold mb-4">
          Recent Invoices
        </h2>
        <div className="">
          <select
            name="status"
            id="status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="fucus-none focus:border-none text-sm border py-1 px-5 rounded-xl"
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-md font-sans min-w-max">
          <thead>
            <tr>
              <th className="bg-gray-200 px-4 py-3 text-left">#</th>
              <th className="bg-gray-200 px-4 py-3 text-left">Name</th>
              <th className="bg-gray-200 px-4 py-3 text-left">Company</th>
              <th className="bg-gray-200 px-4 py-3 text-left">Sales</th>
              <th className="bg-gray-200 px-4 py-3 text-left">Date</th>
              <th className="bg-gray-200 px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => {
              if (
                filterStatus === "All" ||
                (filterStatus === "Paid" && row.status === "Paid") ||
                (filterStatus === "Pending" && row.status === "Pending")
              ) {
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3">{row.name}</td>
                    <td className="px-4 py-3">{row.company}</td>
                    <td className="px-4 py-3">{row.sales}</td>
                    <td className="px-4 py-3">{row.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-md px-3 py-1 text-xs font-bold ${
                          row.status === "Paid"
                            ? "bg-green-500 text-white"
                            : row.status === "Rejected"
                            ? "bg-red-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              } else {
                return null; // Menyembunyikan baris jika tidak sesuai dengan status yang dipilih
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <ReactPaginate
          previousLabel={<FaRegHandPointLeft />}
          nextLabel={<FaRegHandPointRight />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"flex items-center space-x-2"}
          pageClassName={
            "px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
          }
          previousClassName={
            "px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
          }
          nextClassName={
            "px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
          activeClassName={"bg-gray-200"}
        />
      </div>
    </div>
  );
};

export default Data;
