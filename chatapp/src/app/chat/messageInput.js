import React from "react";

const MessageInput = ({
  message,
  setMessage,
  sendMessage,
  handleTyping,
  handleStopTyping,
}) => {
  return (
    <form onSubmit={sendMessage} className="flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleTyping}
        onBlur={handleStopTyping}
        className="border rounded px-4 py-2 w-full mr-2 text-black placeholder-black dark:text-white dark:placeholder-gray-400 dark:bg-gray-700 dark:border-gray-600"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
