import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 px-4 text-center">
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
