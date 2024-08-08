import React from 'react'
import useVideo from '../hooks/useVideos'
import VideoCard from './videoCard'

const VideoContainer = () => {
  const item=useVideo()
  console.log(item)

  if(item){
    return (
      <div  className='flex flex-wrap p-3 justify-center '>
        {item.map((vid,ind)=>{
          return(
            <VideoCard key={ind} info={vid}/>
          )
        })}
      </div>
    )
  }
 
}

export default VideoContainer