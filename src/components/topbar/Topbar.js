import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';


function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
<span className='logo'>Logo

</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <Search />
                <input placeholder='search' className='searchInput'></input>


            </div>

        </div>
        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>HomePage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                <Person />
                <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbarIconItem'>
                <Chat />
                <span className='topbarIconBadge'>2</span>
                </div>
                <div className='topbarIconItem'>
                <Notifications />
                <span className='topbarIconBadge'>3</span>
                </div>

            </div>
            <img  src="/assets/person/1.jpeg" alt="profilePic" className='topbarImg'></img>

        </div>
    </div>
  )
}

export default Topbar