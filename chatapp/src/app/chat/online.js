import React, { useEffect, useState } from "react";

const OnlineUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/users/online-users"
        );
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Failed to fetch online users");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchOnlineUsers();
  }, []);

  return (
    <div className="bg-black text-white p-4">
      <h3 className="text-lg font-semibold mb-4">Online Users</h3>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineUsers;
