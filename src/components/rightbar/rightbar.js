import React from 'react'
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/online';

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='bithdayContainer'>
          <img className='birthdayImg' src='./assets/gift.png' alt=''/>
          <span className='birthdayText'><b>Raji</b> and <b>3 other</b> friends have a Birthday today</span>
        </div>
        <img className='rightbarAd' src='./assets/ad.png' alt=''></img>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
        {Users.map(u=>(
          <Online key={u.id} user={u} />
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar