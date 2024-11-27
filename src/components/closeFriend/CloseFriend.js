import './CloseFriend.css';


function CloseFriend({users}) {
  return (
    <div>
         <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src={users.profilePicture} alt=''></img>
            <span className='sidebarFriendname'>{users.username}</span>
          </li>
    </div>
  )
}

export default CloseFriend