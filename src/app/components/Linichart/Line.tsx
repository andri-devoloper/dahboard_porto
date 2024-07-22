"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: { raw: any }) => `${context.raw}%`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: (value: any) => `${value}%`,
      },
      grid: {
        borderDash: [3, 3],
      },
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Cash Flow",
      data: [5, 10, 20, 45, 30, 20, 15, 25, 35, 40, 10, 50],
      borderColor: ["#10B98168"],
      backgroundColor: ["#1078B9"],
      fill: true,
      tension: 0.4,
    },
  ],
};

const LineChart = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Cash Flow</h2>
        <select className="bg-gray-100 text-gray-600 rounded p-2">
          <option>Last 6 months</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="relative md:h-80">
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (context: { raw: any }) => `${context.raw}%`,
                },
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                ticks: {
                  callback: (value: any) => `${value}%`,
                },
                grid: {
                  // drawBorder: false,
                  color: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, "rgba(0, 0, 0, 0.1)");
                    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.05)");
                    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                    return gradient;
                  },
                  lineWidth: 1,
                },
              },
            },
          }}
          data={data}
        />
      </div>
    </div>
  );
};

export default LineChart;
