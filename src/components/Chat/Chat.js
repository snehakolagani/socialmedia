import React, { useState } from 'react';
import './Chat.css';

const ChatPopup = ({ closePopup }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'You', text: 'Hi there!' },
    { sender: 'John', text: 'Hello, how are you?' }
  ]);

  const handleSendMessage = () => {
    if (message) {
      setChatMessages([...chatMessages, { sender: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content chat-popup">
        <h2>Chat with John</h2>
        <div className="chat-box">
          {chatMessages.map((msg, index) => (
            <div key={index} className={msg.sender === 'You' ? 'chat-message you' : 'chat-message friend'}>
              <span>{msg.sender}: </span>{msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        <button className="close-btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default ChatPopup;
