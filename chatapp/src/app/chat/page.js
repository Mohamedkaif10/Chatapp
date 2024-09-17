"use client";
import React, { useState, useEffect, Fragment } from "react";
import io from "socket.io-client";
import OnlineUsers from "./online";
const ENDPOINT = "http://localhost:8000";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token found in localStorage: ", token);

    if (token) {
      const socketInstance = io(ENDPOINT, {
        query: { token },
        transports: ["websocket", "polling"],
      });

      setSocket(socketInstance);
      socketInstance.on("connect", () => {
        console.log("Socket connected successfully");
      });

      socketInstance.on("connect_error", (err) => {
        console.error("Socket connection error:", err);
      });

      socketInstance.on("disconnect", (reason) => {
        console.log("Socket disconnected:", reason);
      });

      socketInstance.on("message", (newMessage) => {
        console.log("New message received: ", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      socketInstance.on("loadMessages", (loadedMessages) => {
        console.log("Loaded previous messages: ", loadedMessages);
        setMessages(loadedMessages);
      });

      return () => {
        socketInstance.disconnect();
      };
    } else {
      console.error("JWT token is missing!");
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && socket) {
      console.log("Sending message: ", message);
      socket.emit("chatMessage", message);
      setMessage("");
    }
  };

  return (
    <Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Welcome to the Chat
          </h2>

          <div className="chat-box overflow-y-auto h-64 mb-4 border p-4 text-black">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <strong>{msg.username}:</strong> {msg.message}
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border rounded px-4 py-2 w-full mr-2 text-black placeholder-black" // Added text-black
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
        <OnlineUsers />
      </div>
    </Fragment>
  );
};

export default Chat;
