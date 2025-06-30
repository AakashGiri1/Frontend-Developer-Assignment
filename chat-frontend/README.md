# React Socket.IO Chat UI (Frontend Structure)

## Overview
This project is a frontend-only structure for a real-time chat UI using React.js and Socket.IO-client. It demonstrates clean component structure, socket event handling, and scalable code practices for a chat interface.

## Project Structure
```
src/
  components/
    ChatWindow.jsx      # Main chat container, handles socket logic
    Message.jsx         # Single message bubble, left/right alignment
    MessageInput.jsx    # Input box and send button
    Message.css         # Styles for message bubbles
    ChatWindow.css      # Styles for chat window
  services/
    socket.js           # Socket.IO-client connection setup
  App.js                # Renders ChatWindow
  index.js              # Entry point
```

## Socket.IO Logic
- Socket connection is set up in `services/socket.js` using `socket.io-client`.
- The `ChatWindow` component connects to the socket on mount, listens for `'message'` events, and emits `'message'` on send.
- Messages are stored in local state for UI updates.
- Inline comments indicate where backend integration or advanced logic would go.

## Features
- Two hardcoded users: `userA` and `userB` (toggle for testing)
- Messages from self appear on the right, others on the left
- Scrollable chat area
- Basic, clean CSS for chat UI
- Well-commented, reusable React components

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** This is a frontend structure only. Socket events are simulated; backend integration points are marked with comments. 