import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-8 text-black dark:text-white">
          Welcome
        </h1>
        <div className="space-y-4">
          <Link
            href="/login"
            className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="block w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
          >
            Sign Up if you are not registered
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
