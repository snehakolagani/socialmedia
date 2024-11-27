import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/sidebar/sidebar'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

function Profile() {
  return (
    <div> <Topbar />
    <div className='profile'>
    <Sidebar />
    <div className='profileRight'>
        <div className='profileTop'>
            <div className='profileCover'>

            <img className='profileCoverImg' src='./assets/post/3.jpeg' alt=''></img>
            <img className='profileUserImg' src='./assets/person/7.jpeg' alt=''></img>
            </div>
            <div className='profileInfo'>
                <h4 className='profileInfoName'>Sneha Kolagani</h4>
                <span className='profileInfoDesc'>Hi Friend there!</span>
            </div>
        </div>
        <div className='profileRightBottom'>
        <Feed />
        <Rightbar />
        </div>
    </div>
    
   
    </div>
    </div>
  )
}

export default Profile