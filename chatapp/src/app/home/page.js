import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold mb-8">Welcome</h1>
        <div className="space-y-4">
          <Link href="/login">
            <a className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Login
            </a>
          </Link>
          <Link href="/register">
            <a className="block w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">
              Sign Up if you are not registered
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
