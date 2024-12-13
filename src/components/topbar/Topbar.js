import React, { useState } from 'react';
import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // State to toggle dropdown visibility
  const navigate = useNavigate();  // React Router navigation

  // Handle click on profile image to toggle dropdown
  const handleProfileClick = () => {
    setIsDropdownOpen(prev => !prev);  // Toggle the state of the dropdown menu
  };

  // Handle logout
  const handleLogout = () => {
    // Clear session or user data if needed (e.g., localStorage.removeItem('userToken'))
    setIsDropdownOpen(false);  // Close dropdown
    navigate('/logout');  // Redirect to login page
  };

  // Handle edit profile
  const handleEditProfile = () => {
    setIsDropdownOpen(false);  // Close dropdown
    navigate('/editprofile');  // Redirect to edit profile page
  };

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
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        {/* Profile image */}
        <div className="topbarProfile" onClick={handleProfileClick}>
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
    </div>
  );
}

export default Topbar;
