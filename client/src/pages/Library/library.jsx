import React from 'react'
import './Library.css'
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';

function Library() {
  return (
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">Library</div>
    </div>
  )
}

export default Library;