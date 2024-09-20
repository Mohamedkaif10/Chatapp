import React, { useEffect, useState } from "react";
import axios from "axios";

const OnlineUsers = ({ onSelectUser }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/online-users"
        );
        setOnlineUsers(response.data);
      } catch (error) {
        console.error("Error fetching online users:", error);
      }
    };

    fetchOnlineUsers();
  }, []);

  return (
    <div className="bg-black dark:bg-gray-800 p-4 rounded-lg shadow-lg w-48 ml-4 text-white dark:text-gray-300">
      <h3 className="text-xl font-semibold mb-4">Online Users</h3>
      <ul>
        {onlineUsers.length > 0 ? (
          onlineUsers.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer mb-2 bg-green-800 dark:bg-green-600 p-2 rounded hover:bg-green-700 dark:hover:bg-green-500"
              onClick={() => onSelectUser(user)}
            >
              {user.username}
            </li>
          ))
        ) : (
          <li className="text-white dark:text-gray-300">No users online</li>
        )}
      </ul>
    </div>
  );
};

export default OnlineUsers;
