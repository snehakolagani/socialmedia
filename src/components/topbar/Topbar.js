import React, { useState } from 'react';
import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Popup components for Notification, Chat, and Friend Request
import NotificationPopup from '../Notifications/Notifications'; 
import ChatPopup from '../Chat/Chat'; 
import FriendRequestPopup from '../FriendRequest/FriendRequest'; 
import EditProfile from '../EditProfile/Editprofile';

function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null); // State to track the currently active popup
  const navigate = useNavigate();
  
  // Navigation handlers
  const handleFriendRequest = () => setActivePopup('friendRequest');
  const handleChat = () => setActivePopup('chat');  // Open Chat Popup
  const handleNotifications = () => setActivePopup('notification');  // Open Notification Popup
  const handleLogout = () => navigate('/logout');
  const handleEditProfile = () => navigate('/editprofile');

  // Close the popup
  const closePopup = () => setActivePopup(null);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social-Media</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={handleFriendRequest}>
            <Person /> {/* Correctly used as a React Component */}
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem" onClick={handleChat}>
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem" onClick={handleNotifications}>
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        {/* Profile image with dropdown */}
        <div className="topbarProfile" onClick={() => setIsDropdownOpen((prev) => !prev)}>
          <img
            src="/assets/person/1.jpeg"
            alt="profilePic"
            className="topbarImg"
          />
          {isDropdownOpen && (
            <div className="dropdownMenu">
              <span className="dropdownItem" onClick={handleEditProfile}>
                Edit Profile
              </span>
              <span className="dropdownItem" onClick={handleLogout}>
                Logout
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Conditionally render the popups */}
      {activePopup === 'notification' && <NotificationPopup closePopup={closePopup} />}
      {activePopup === 'chat' && <ChatPopup closePopup={closePopup} />}
      {activePopup === 'friendRequest' && <FriendRequestPopup closePopup={closePopup} />}
      
    </div>
  );
}

export default Topbar;
