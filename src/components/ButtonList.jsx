import React from 'react'
import Button from './Button'

const ButtonList = () => {
  
  const btns=["All","Games","Movies","Cricket","Football"]
  return (
    <div className='w-[80%] h-[5vh]  whitespace-nowrap overflow-x-auto scrollbar-hide mx-auto p-5 pb-8 text-center'>
        
         {btns.map((n,i)=>{
          return(
                <Button key={i} name={n} />
   
          )
         })}
          
    </div>
  )
}

export default ButtonList