import React from "react";

const MessageBubble = () => {
  return (
    <div className="flex flex-col gap-2 m-4">
      <div className="p-5 border w-max">Sender</div>
      <div className="p-5 border w-max">Message content</div>
    </div>
  );
};

export default MessageBubble;
