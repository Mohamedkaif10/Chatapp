"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ThemeToggle from "./themetoggle";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <Link href="/" className="hover:text-indigo-500 dark:hover:text-indigo-300">
            KumoTalk
          </Link>
        </h1>

        <nav className="space-x-4">
          {pathname !== "/" && pathname !== "/chat" && (
            <Link href="/" className="hover:text-indigo-500 dark:hover:text-indigo-300">
              Home
            </Link>
          )}
          {pathname !== "/login" && pathname !== "/chat" && (
            <Link href="/login" className="hover:text-indigo-500 dark:hover:text-indigo-300">
              Login
            </Link>
          )}
          {pathname !== "/register" && pathname !== "/chat" && (
            <Link href="/register" className="hover:text-indigo-500 dark:hover:text-indigo-300">
              Register
            </Link>
          )}
          {pathname === "/chat" && (
            <button
              onClick={handleLogout}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Add the Theme Toggle component */}
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
