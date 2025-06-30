// components/MessageInput.jsx
import React, { useState } from 'react';

/**
 * MessageInput component for sending messages
 * @param {function} onSend - callback to send message
 */
const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  // Inline comment: This is where you would emit a 'message' event to the backend via socket

  return (
    <div className="message-input-container">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
        className="message-input"
        onKeyDown={e => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="send-button">Send</button>
    </div>
  );
};

export default MessageInput; 