"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "./themetoggle";

const Header = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <Link
            href="/"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Chat App
          </Link>
        </h1>

        <nav className="space-x-4">
          <Link
            href="/"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Home
          </Link>
          <Link
            href="/login"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Register
          </Link>
        </nav>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
