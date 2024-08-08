import React from 'react'

const VideoCard = ({info}) => {
  
  console.log(info.snippet.thumbnails)
  const{snippet} =info;
  const{thumbnails}=snippet
  const {medium}=thumbnails

 
    return (
    <div className=' border rounded-md mx-4 my-2 shadow-lg'>
        <img  className='rounded-md'  src={medium.url} alt="" />
        <h1>Title</h1>
        <h4>views</h4>
    </div>
  )
}

export default VideoCard