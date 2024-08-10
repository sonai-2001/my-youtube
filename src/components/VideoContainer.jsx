import React from 'react'
import useVideo from '../hooks/useVideos'
import VideoCard from './videoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const item=useVideo()
  console.log(item)

  if(item){
    return (
      <div  className='flex flex-wrap p-3 justify-center '>
        {item.map((vid,ind)=>{
          return(
            <Link to={`/watch?v=${vid.id}`} key={ind}><VideoCard  info={vid}/></Link>
          )
        })}
      </div>
    )
  }
 
}

export default VideoContainer