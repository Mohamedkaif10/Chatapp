import React from "react";
import Header from "./components/header";
import "./globals.css";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Chat Application</title>
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
