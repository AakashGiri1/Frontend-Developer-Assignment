// services/socket.js
import { io } from 'socket.io-client';

// Placeholder URL for backend (would be replaced with real backend URL)
const SOCKET_URL = 'http://localhost:4000';

// Create and export a socket instance
// In a real app, you might want to handle reconnection, auth, etc.
export const socket = io(SOCKET_URL, {
  autoConnect: false, // We'll connect manually in the component
});

// Simulate backend: echo messages to all clients locally (for demo only)
socket.on('message', (msg) => {
  // In a real app, the backend would broadcast this event
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('socket-message', { detail: msg }));
  }, 100); // Simulate network delay
});

// Listen for local echo and re-emit as if from server
if (!socket._localSimulated) {
  socket._localSimulated = true;
  window.addEventListener('socket-message', (e) => {
    socket.emit('message', e.detail);
  });
}
// Inline comment: Remove this simulation when connecting to a real backend.

// Inline comment: This is where you would add authentication or other connection options for backend integration. 