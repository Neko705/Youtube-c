import React from 'react'
import './home.css'
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';

function Home() {
  return (
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">Home</div>
    </div>
  )
}

export default Home;