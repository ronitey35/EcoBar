import React, { useState } from 'react'
import { IoPlayCircleOutline } from 'react-icons/io5'
import ReactPlayer from 'react-player'

const VideoSection = () => {
    const [playing,setPlaying] = useState(false)
  return (
    <div className='flex justify-center p-4 items-center'>

       <div className='relative w-full max-w-2xl '>

        {/* play button */}
   {!playing && (
     <div
     
       onClick={()=> setPlaying(true)}
     className='absolute cursor-pointer inset-0 flex items-center justify-center z-10'>
   <IoPlayCircleOutline className='w-16 h-16 text-white' />
        </div>
    )
   }


  {/* react player */}
        <ReactPlayer
        controls
        width='100%'
        height='400px'
        url="/video/video-1.mov" /> 
        playing={playing}
        onPlay={()=> setPlaying(true)}
        onPause ={()=> setPlaying(false)}
    </div>
    </div>
  )
}

export default VideoSection