import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarlist'>
          <li className='sidebarlistitem'>
          <RssFeedIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Feed</span>
          </li>
          <li className='sidebarlistitem'>
          <ChatIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Chat</span>
          </li>
          <li className='sidebarlistitem'>
          <PlayCircleIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Video</span>
          </li>
          <li className='sidebarlistitem'>
          <GroupsIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Groups</span>
          </li>
          <li className='sidebarlistitem'>
          <BookmarkIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>BooksMark</span>
          </li>
          <li className='sidebarlistitem'>
          <ContactSupportIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Questions</span>
          </li>
          <li className='sidebarlistitem'>
          <WorkIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Jobs</span>
          </li>
          <li className='sidebarlistitem'>
          <EventAvailableIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Events</span>
          </li>
          <li className='sidebarlistitem'>
          <SchoolIcon className='sidebaricons'/>
          <span className='sitebarlistitemtext'>Courses</span>
          </li>
        </ul>
        <button className='sidebarbutton'>Read More..</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
         {Users.map((u) => (
          <CloseFriend  key= {u.id} users={u}/>
         ))}
       
        </ul>
      </div>
    </div>
  )
}

export default Sidebar