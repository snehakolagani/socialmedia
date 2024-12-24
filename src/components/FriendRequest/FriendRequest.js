import React from 'react';
import './FriendRequest.css';

const FriendRequestPopup = ({ closePopup }) => {
  // Example friend requests
  const friendRequests = [
    { name: 'Alice', id: 1 },
    { name: 'Bob', id: 2 },
    { name: 'Charlie', id: 3 }
  ];

  const handleAccept = (id) => {
    console.log(`Friend request from ${id} accepted!`);
  };

  const handleDelete = (id) => {
    console.log(`Friend request from ${id} deleted!`);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Friend Requests</h2>
        <ul className="friend-request-list">
          {friendRequests.map((request) => (
            <li key={request.id} className="friend-request-item">
              <span>{request.name}</span>
              <div className="action-buttons">
                <button onClick={() => handleAccept(request.id)} className="accept-btn">Accept</button>
                <button onClick={() => handleDelete(request.id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default FriendRequestPopup;
