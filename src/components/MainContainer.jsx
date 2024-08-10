import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=' w-[100vw] md:w-[85vw] '>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer