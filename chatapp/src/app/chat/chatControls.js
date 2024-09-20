import React from "react";

const ChatControls = ({ recipient, switchToGroupChat }) => {
  return (
    recipient && (
      <button
        onClick={switchToGroupChat}
        className="bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded mb-4 w-full hover:bg-red-600 dark:hover:bg-red-700"
      >
        Back to Group Chat
      </button>
    )
  );
};

export default ChatControls;
