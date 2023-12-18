import React from 'react'
import './home.css'
import Leftsidebar from '../../components/LeftSidebar/leftsidebar';
import Showvideogrid from '../../components/ShowVideoGrid/showvideogrid';

function Home() {
  const vids = [
    {
      id:1,
      video_src: 'vid',
      Chanel:"62bafe675cea35a6c30685f",
      title:"video 1",
      discription:'discription of video-1'
    },
    {
      id:2,
      video_src: 'vid',
      Chanel:"add",
      title:"video 2",
      discription:'discription of video-2'
    },
    {
      id:3,
      video_src: 'vid',
      Chanel:"cdd",
      title:"video 3",
      discription:'discription of video-3'
    }
  ];
  return (
    <div className='container_pages'>
        <Leftsidebar />
        <div className="container2_pages">
          <Showvideogrid vids={vids}/>
        </div>
    </div>
  )
}

export default Home;