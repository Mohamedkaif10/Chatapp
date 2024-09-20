import React from "react";

const ChatWindow = ({
  messages,
  privateMessages,
  recipient,
  typing,
  username,
}) => {
  return (
    <div className="chat-box overflow-y-auto h-64 mb-4 border p-4 text-black dark:text-white bg-white dark:bg-gray-800">
      {recipient
        ? privateMessages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>
                {msg.from === username ? `${msg.from} (you)` : msg.from}:
              </strong>{" "}
              {msg.message}
            </div>
          ))
        : messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <strong>
                {msg.username === username
                  ? `${msg.username} (you)`
                  : msg.username}
                :
              </strong>{" "}
              {msg.message}
            </div>
          ))}

      {typing && recipient && (
        <p className="text-sm italic text-gray-500 dark:text-gray-300">
          {recipient.username} is typing...
        </p>
      )}
    </div>
  );
};

export default ChatWindow;
