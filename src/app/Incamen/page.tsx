'use client'

import React from "react";

import { FaUsers, FaMoneyCheckDollar } from "react-icons/fa6";
import InvoiceStatistics from "../components/Pie/pie";
import LineChart from "../components/Linichart/Line";
import DataTabel from "../components/DataTabel/Datatabel";
import Box from "../components/BoxData/Box";
import CustomChart from "../components/Batang/Batang";

import { useUser } from "../dashboard/UserContext";

function Incoment() {
  const { userId } = useUser();

  return (
    <div className="bg-[#EDF4FF] w-full h-max px-5 py-3">
      <div className="grid grid-row-1 md:grid-cols-12 gap-4 mb-4">
        <div className="col-span-6 p-2 bg-white rounded-lg">
          <h1 className="mb-2 font-bold text-sm pl-3 md:text-lg md:pl-4">
            Incomen 
            {/* {userId} */}
          </h1>
          <Box />
        </div>
        <div className="col-span-6 p-3 bg-white rounded-lg h-max -z-1">
          <CustomChart />
        </div>
      </div>
      {/* Pie */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-4">
        <div className="p-3 bg-white rounded-lg md:w-4/12">
          <InvoiceStatistics />
        </div>
        <div className="flex bg-white md:w-8/12 rounded-lg">
          <LineChart />
        </div>
      </div>
      {/* Data Tabel */}
      <div className="bg-white rounded-lg">
        <DataTabel />
      </div>
    </div>
  );
}

export default Incoment;
