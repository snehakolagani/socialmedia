import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className='share'>
      <div className='shareWraper'>
        <div className='shareTop'>
  <img className='shareProfileImg' src='./assets/person/1.jpeg' alt=''/>
  <input 
  placeholder='whats in your Mind..' 
  className='shareInput'/>
</div>
<hr className='shareHr'></hr>
        <div className='shareBottom'>
          <div className='shareOptions'>
          <div className='shareOption'>
            <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
            <span className='shareOptiontext'>Photos or videos</span>
            </div>
            <div className='shareOption'>
            <LabelIcon htmlColor="blue" className='shareIcon'/>
            <span className='shareOptiontext'>Tag</span>
            </div>
            <div className='shareOption'>
            <LocationOnIcon htmlColor="green" className='shareIcon'/>
            <span className='shareOptiontext'>Location</span>
            </div>
            <div className='shareOption'>
            <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon'/>
            <span className='shareOptiontext'>Fellings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share