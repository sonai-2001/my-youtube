import React from 'react'
import Button from './Button'

const ButtonList = () => {
  
  const btn=["All","Comedy","Drama","Sports","Cricket","FootBall","Education","Javascript"]
  return (
    <div className='px-3 flex justify-center w-full '>
      {
        btn.map((b,ind)=>{
          return(
            <Button key={ind} name={b}/>
          )
        })
      }
      
    </div>
  )
}

export default ButtonList