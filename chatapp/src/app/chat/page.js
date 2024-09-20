"use client";
import React, { useState, useEffect, Fragment } from "react";
import io from "socket.io-client";
import OnlineUsers from "./online";
import ChatWindow from "./chatWindow";
import MessageInput from "./messageInput";
import ChatControls from "./chatControls";
const ENDPOINT = "http://localhost:8000";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const loggedInUsername = decodedToken.user.username;
    setUsername(loggedInUsername);

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
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      socketInstance.on("privateMessage", (privateMessage) => {
        setPrivateMessages((prevMessages) => [...prevMessages, privateMessage]);
      });

      socketInstance.on("typing", (username) => {
        setTyping(true);
      });

      socketInstance.on("stopTyping", () => {
        setTyping(false);
      });

      return () => {
        socketInstance.disconnect();
      };
    } else {
      console.error("JWT token is missing!");
    }
  }, []);

  const handleTyping = () => {
    if (socket && recipient) {
      socket.emit("typing", recipient.id);
    }
  };

  const handleStopTyping = () => {
    if (socket && recipient) {
      socket.emit("stopTyping", recipient.id);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && socket) {
      if (recipient) {
        const newPrivateMessage = {
          from: username,
          message,
          timestamp: new Date(),
        };

        setPrivateMessages((prevMessages) => [
          ...prevMessages,
          newPrivateMessage,
        ]);

        socket.emit("privateMessage", { recipientId: recipient.id, message });
      } else {
        socket.emit("chatMessage", message);
      }

      setMessage("");
      handleStopTyping();
    }
  };

  const handleSelectUser = (user) => {
    setRecipient(user);
  };

  const switchToGroupChat = () => {
    setRecipient(null);
  };

  return (
    <Fragment>
      <div className="flex items-start justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
            {recipient
              ? `Chat with ${recipient.username}`
              : "Welcome to the Group Chat"}
          </h2>
          <ChatWindow
            messages={messages}
            privateMessages={privateMessages}
            recipient={recipient}
            typing={typing}
            username={username}
          />
          <ChatControls
            recipient={recipient}
            switchToGroupChat={switchToGroupChat}
          />
          <MessageInput
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
            handleTyping={handleTyping}
            handleStopTyping={handleStopTyping}
          />
        </div>

        <OnlineUsers onSelectUser={handleSelectUser} />
      </div>
    </Fragment>
  );
};

export default Chat;
