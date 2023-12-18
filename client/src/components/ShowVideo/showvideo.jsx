import React from 'react'
import './showvideo.css'

function Showvideo({vid}) {
  return (
    <>
    <div>
        <video src={`${vid?.video_src}`} className='video_showvideo'></video>
    </div>
    </>
  )
}

export default Showvideo;