import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from 'react-icons/md'
import './leftsidebar.css'
import { NavLink } from 'react-router-dom'

function Leftsidebar() {
  return (
    <div className='container_leftsidebar'>
        <NavLink to={'/'} className="sidebar_icon">
          <AiOutlineHome size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Home</div>
        </NavLink>
        <NavLink to={'/explor'} className="sidebar_icon">
          <MdOutlineExplore size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Explore</div>
        </NavLink>
        <NavLink to={'/subscriptions'} className="sidebar_icon">
          <MdOutlineSubscriptions size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Subscription</div>
        </NavLink>
        <NavLink to={'/library'} className="sidebar_icon">
          <MdOutlineVideoLibrary size={25} className='icon_sidebar'/>
          <div className="text_icon_sidbar">Library</div>
        </NavLink>
    </div>
  )
}

export default Leftsidebar