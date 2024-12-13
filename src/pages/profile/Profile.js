import React from 'react';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/rightbar';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Profile.css';

function Profile({ profileData }) {
  return (
    <div>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileTop'>
            <div className='profileCover'>
              <img className='profileCoverImg' src='./assets/post/3.jpeg' alt='' />
              <img className='profileUserImg' src='./assets/person/7.jpeg' alt='' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{profileData.name}</h4>
              <span className='profileInfoDesc'>{profileData.description}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
