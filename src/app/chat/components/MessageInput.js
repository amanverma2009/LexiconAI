import React from 'react'

const MessageInput = () => {
  const model = "GPT-4";
  return (
    <div>
      <input type="text" name="message" id="message" placeholder={`Ask ${model} anything...`} />
    </div>
  )
}

export default MessageInput
