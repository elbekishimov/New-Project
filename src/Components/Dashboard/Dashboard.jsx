import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-emerald-900 text-white p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

        <nav className="space-y-4">
          <a href="#" className="block hover:text-emerald-300 transition">
            Dashboard
          </a>
          <a href="#" className="block hover:text-emerald-300 transition">
            Messages
          </a>
          <a href="#" className="block hover:text-emerald-300 transition">
            Services
          </a>
          <a href="#" className="block hover:text-emerald-300 transition">
            Users
          </a>
          <a href="#" className="block hover:text-emerald-300 transition">
            Settings
          </a>
        </nav>

        <div className="mt-auto pt-10">
          <button className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg transition">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard Overview
          </h1>
          <div className="bg-white px-4 py-2 rounded-lg shadow">
            Admin
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">Total Messages</h3>
            <p className="text-3xl font-bold text-emerald-900 mt-2">128</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">Active Services</h3>
            <p className="text-3xl font-bold text-emerald-900 mt-2">12</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">New Users</h3>
            <p className="text-3xl font-bold text-emerald-900 mt-2">45</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">Revenue</h3>
            <p className="text-3xl font-bold text-emerald-900 mt-2">$24,500</p>
          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>New contact message received</span>
              <span className="text-slate-400 text-sm">2 min ago</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>User registered</span>
              <span className="text-slate-400 text-sm">15 min ago</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Service updated</span>
              <span className="text-slate-400 text-sm">1 hour ago</span>
            </div>

            <div className="flex justify-between">
              <span>New billing request</span>
              <span className="text-slate-400 text-sm">3 hours ago</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}