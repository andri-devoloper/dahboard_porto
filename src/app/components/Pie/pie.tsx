"use client";

import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { title: "Unpaid", value: 40, color: "#3b82f6" }, // Biru
  { title: "Paid", value: 27.4, color: "#1e293b" }, // Hitam
  { title: "Pending", value: 38.6, color: "#cbd5e1" }, // Abu-abu
];

const InvoicePieChart: React.FC = () => {
  const [hovered, setHovered] = useState<number | undefined>(undefined);

  return (
    <div className="flex flex-col">
      <h1 className="mb-2 font-bold text-sm pl-3 md:text-lg md:pl-4">
        Pengujung
      </h1>
      <div className="flex flex-row items-center">
        <PieChart
          data={data}
          radius={45}
          lineWidth={60}
          background="transparent"
          segmentsStyle={(index) => ({
            transition: "all 0.3s ease-in-out",
            transform: hovered === index ? "scale(1.01)" : "scale(1)",
            cursor: "pointer",
            width: "100px",
          })}
          segmentsShift={(index) => (hovered === index ? 5 : 1)}
          onMouseOver={(_, index) => {
            setHovered(index);
          }}
          onMouseOut={() => {
            setHovered(undefined);
          }}
          label={({ dataEntry }) => `${dataEntry.value}%`}
          labelStyle={{
            fontSize: "4px",
            fontFamily: "sans-serif",
            fill: "#fff",
          }}
          labelPosition={60}
        />
        <div className="ml-5 w-max">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center mb-1">
              <div
                className="w-3 h-3 mr-2"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="md:text-sm font-medium text-[10px]">
                {entry.title}: {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoicePieChart;
