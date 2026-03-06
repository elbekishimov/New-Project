import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Statistika */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Products</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Orders</h2>
            <p className="text-3xl font-bold mt-2">58</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Users</h2>
            <p className="text-3xl font-bold mt-2">34</p>
          </div>

        </div>

        {/* Quick actions */}
        <div className="bg-white shadow rounded-xl p-6 mb-10">

          <h2 className="text-xl font-semibold mb-4">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/products"
              className="px-5 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              View Products
            </Link>

            <Link
              to="/services"
              className="px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-black"
            >
              Services
            </Link>

            <Link
              to="/blog"
              className="px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Blog
            </Link>

          </div>

        </div>

        {/* Recent activity */}
        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-600">

            <li className="border-b pb-2">
              New product added
            </li>

            <li className="border-b pb-2">
              User signed up
            </li>

            <li className="border-b pb-2">
              Order completed
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}