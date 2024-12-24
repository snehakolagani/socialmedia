import React from 'react';
import './Notifications.css';

const NotificationPopup = ({ closePopup }) => {
  // List of notifications
  const notifications = [
    "You got a new friend request",
    "Today is John's birthday",
    "Alice commented on your post",
    "You have 5 new likes on your photo"
  ];

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Notifications</h2>
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">{notification}</li>
          ))}
        </ul>
        <button className="close-btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default NotificationPopup;
