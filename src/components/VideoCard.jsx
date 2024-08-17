import React from 'react'

const VideoCard = () => {
  return (
    <div className=' w-[60vw] md:w-[25vw] h-[40vh] md:h-[37vh] p-2   overflow-hidden'>
       {/* for image or thumbnail */}
       <div className='w-full h-[70%]'>
        <img className='w-full h-full object-cover rounded-md' src="https://media.istockphoto.com/id/1407232682/photo/selective-focus-of-delicious-mutton-curry.webp?b=1&s=612x612&w=0&k=20&c=p7kiTc-d0GXq3LsH-xllyCqgbLxMYX4i2SXe1TJxSEg=" alt="image" />
       </div>
       {/* description */}
       <div className='pl-2 text-sm md:text-md'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque porro vel perspiciatis.
       </div>
       {/* views */}
       <h3 className='pl-2 text-sm'>
           802903 views
       </h3>
    </div>
  )
}

export default VideoCard