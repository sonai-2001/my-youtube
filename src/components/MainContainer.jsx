import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=' w-[100vw] md:w-[90vw] '>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer