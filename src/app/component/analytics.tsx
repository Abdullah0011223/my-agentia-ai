"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const lineData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 4500 },
  { name: "Apr", value: 3200 },
  { name: "May", value: 2800 },
  { name: "Jun", value: 3500 },
  { name: "Jul", value: 4200 },
];

const areaData = [
  { name: "Q1", users: 5000, revenue: 3000 },
  { name: "Q2", users: 7000, revenue: 4000 },
  { name: "Q3", users: 11000, revenue: 6000 },
  { name: "Q4", users: 8000, revenue: 5000 },
];

export default function AnalyticsDashboard() {
  return (
    <div id="analytics" className="bg-gray-800 py-10 px-4 text-white">
      <h1 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent font-bold text-3xl text-center">Real-Time Analytics Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10">
        {/* Performance Trends Line Chart */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-lg mb-4">Performance Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" stroke="gray" />
              <YAxis stroke="gray" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4F9CF9" strokeWidth={2} dot={{ fill: "#4F9CF9", r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth & Revenue Area Chart */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent text-lg mb-4">User Growth & Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaData}>
              <XAxis dataKey="name" stroke="gray" />
              <YAxis stroke="gray" />
              <Tooltip />
              <Area type="monotone" dataKey="users" stroke="#2ECC71" fill="#2ECC71" opacity={0.6} />
              <Area type="monotone" dataKey="revenue" stroke="#2980B9" fill="#2980B9" opacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
