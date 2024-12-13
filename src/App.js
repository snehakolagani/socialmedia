import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Profile from './pages/profile/Profile';
import Logout from './pages/Logout/Logout';
import EditProfile from './components/EditProfile.js/Editprofile';

const App = () => {
  const [profileData, setProfileData] = useState({
    name: 'Sneha Kolagani',
    description: 'Hi Friend there!',
  });

  const handleProfileUpdate = (updatedProfile) => {
    setProfileData(updatedProfile);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route 
            path='/profile' 
            element={<Profile profileData={profileData} />} 
          />
          <Route path='/logout' element={<Logout />} />
          <Route 
            path='/editprofile' 
            element={<EditProfile 
              profileData={profileData} 
              onProfileUpdate={handleProfileUpdate} 
            />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
