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
        className="border rounded px-4 py-2 w-full mr-2 text-black placeholder-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;
