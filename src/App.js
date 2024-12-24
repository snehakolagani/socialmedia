import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Profile from './pages/profile/Profile';
import Logout from './pages/Logout/Logout';

import Notifications from './components/Notifications/Notifications';
import ChatWindow from './components/Chat/Chat';
import FriendRequest from './components/FriendRequest/FriendRequest';
import EditProfile from './components/EditProfile/Editprofile';

const App = () => {
 
    const [profileData, setProfileData] = useState({
      name: 'John Doe',
      description: 'Software Developer',
    });
       
    const updateProfile = (updatedData) => {
      setProfileData(updatedData);
      console.log('updated data',updatedData)
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
          <Route path='/editprofile' element={  <EditProfile
          profileData={profileData}
          updateProfile={updateProfile}
         
        />}
      
       />
                <Route path='/logout' element={<Logout />} />
                <Route path='notifications' element={<Notifications />} />
                <Route path='chat' element={<ChatWindow />} />
                <Route path='friendRequest' element={<FriendRequest />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
