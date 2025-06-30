// components/Message.jsx
import React from 'react';
import './Message.css';

/**
 * Message bubble component
 * @param {string} sender - sender id (userA/userB)
 * @param {string} content - message text
 * @param {string} currentUser - current user id
 */
const Message = ({ sender, content, currentUser }) => {
  const isSelf = sender === currentUser;
  return (
    <div className={`message-row ${isSelf ? 'self' : 'other'}`}>
      <div className={`message-bubble ${isSelf ? 'self-bubble' : 'other-bubble'}`}>
        {content}
      </div>
    </div>
  );
};

export default Message; 