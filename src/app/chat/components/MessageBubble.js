import React from "react";
import AiMessage from "./AiMessage";
import UserMessage from "./UserMessage";

const MessageBubble = ({ role, content }) => {
  if (!content) return null;

  return (
    <div className="m-4">
      {role === "assistant" && <AiMessage message={content} />}
      {role === "user" && <UserMessage message={content} />}
      {role === "system" && (
        <div className="text-center text-sm text-gray-500">
          {content}
        </div>
      )}
    </div>
  );
};

export default React.memo(MessageBubble);
