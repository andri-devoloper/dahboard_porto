"use client";

import React, { Component } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Finance Costs", Actual: 500, Budget: 700 },
  { name: "Cost", Actual: 1000, Budget: 1200 },
  { name: "Overhead", Actual: 800, Budget: 1100 },
  { name: "Total Profit", Actual: 1600, Budget: 2100 },
  { name: "Sales Fee", Actual: 1000, Budget: 1300 },
  { name: "Operating Profit", Actual: 1400, Budget: 1600 },
];

class CustomChart extends Component {
  render() {
    return (
      <div className="">
        <h1 className="mb-2 font-bold text-sm pl-3 md:text-lg md:pl-4">
          Data Tren
        </h1>
        <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Actual" fill="#00C49F" />
            <Line
              type="monotone"
              dataKey="Budget"
              stroke="#1078B9"
              dot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default CustomChart;
