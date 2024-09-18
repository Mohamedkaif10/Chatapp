import React from "react";

const ChatControls = ({ recipient, switchToGroupChat }) => {
  return (
    recipient && (
      <button
        onClick={switchToGroupChat}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4 w-full"
      >
        Back to Group Chat
      </button>
    )
  );
};

export default ChatControls;
