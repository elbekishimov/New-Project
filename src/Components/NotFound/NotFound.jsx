import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="text-center">
        
        <h1 className="text-9xl font-bold text-gray-800">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Home
        </Link>

      </div>

    </div>
  );
}