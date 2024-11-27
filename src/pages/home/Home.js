import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Rightbar from '../../components/rightbar/rightbar';
import Feed from '../../components/feed/Feed';
import './Home.css'

function Home() {
  return (
    <div>
        <Topbar />
        <div className='homecontainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
       
        </div>
  
    </div>
  )
}

export default Home