import React from "react";
import AiMessage from "./AiMessage";
import UserMessage from "./UserMessage";

const MessageBubble = ({ role, content }) => {
  if (!content) return null;

  return (
    <div className="px-4 py-2">
      {role === "assistant" && <AiMessage message={content} />}
      {role === "user" && <UserMessage message={content} />}
      {role === "system" && (
        <div className="text-center text-xs text-slate-500 dark:text-white/50">
          {content}
        </div>
      )}
    </div>
  );
};

export default React.memo(MessageBubble);
