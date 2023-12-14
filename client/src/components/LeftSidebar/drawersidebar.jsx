import React from 'react'
import './leftsidebar.css'
import { AiFillPlayCircle, AiOutlineHome } from 'react-icons/ai';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';

function Drawersidebar() {
  return (
    <div className='container_drawerleftsidebar'>
        <div className="container2_drawerleftsidebar">
            <div className="drawer_leftsidebar">
                <div className="sidebar_icon_div">
                    <p>
                        <AiOutlineHome className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Home</div>
                    </p>
                </div>
                <div className="sidebar_icon_div">
                    <p>
                        <SiYoutubeshorts className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Shorts</div>
                    </p>
                </div>
                <div className="sidebar_icon_div">
                    <p>
                        <MdOutlineSubscriptions className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Subscription</div>
                    </p>
                </div>
            </div>
            <div className="librarybtn_leftsidebar">
            <div className="sidebar_icon_div">
                    <p>
                        <MdOutlineVideoLibrary className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Library</div>
                    </p>
                </div>
                <div className="sidebar_icon_div">
                    <p>
                        <MdOutlineExplore className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Explore</div>
                    </p>
                </div>
                <div className="sidebar_icon_div">
                    <p>
                        <FaHistory className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">History</div>
                    </p>
                </div>
                <div className="sidebar_icon_div">
                    <p>
                        <AiFillPlayCircle className='icon_sidebar' size={25} style={{color:'white',margin:'auto 0.5rem'}}/>
                        <div className="text_icon_sidbar">Your Videos</div>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Drawersidebar;