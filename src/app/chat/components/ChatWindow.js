import React from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {

  return (
    <div>
      <MessageBubble />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
