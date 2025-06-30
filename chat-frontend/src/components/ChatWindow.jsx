// components/ChatWindow.jsx
import React, { useEffect, useRef, useState } from 'react';
import { socket } from '../services/socket';
import Message from './Message';
import MessageInput from './MessageInput';
import './ChatWindow.css';

const USERS = ['userA', 'userB'];

const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // {sender, content}
  const [currentUser, setCurrentUser] = useState(USERS[0]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Connect to socket when component mounts
    socket.connect();

    // Listen for 'message' events from server (or simulated backend)
    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Inline comment: This is where you would handle cleanup and disconnect from backend
    return () => {
      socket.off('message');
      socket.disconnect();
    };
  }, []);

  const handleSend = (content) => {
    const msg = { sender: currentUser, content };
    setMessages((prev) => [...prev, msg]); // Optimistically add message
    // Emit 'message' event to server (or simulated backend)
    socket.emit('message', msg);
    // Inline comment: In real backend, you would wait for server confirmation
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>Chat as: </span>
        <select value={currentUser} onChange={e => setCurrentUser(e.target.value)}>
          {USERS.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div className="chat-body">
        {messages.map((msg, idx) => (
          <Message
            key={idx}
            sender={msg.sender}
            content={msg.content}
            currentUser={currentUser}
          />
        ))}
        <div ref={chatEndRef} />
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow; 