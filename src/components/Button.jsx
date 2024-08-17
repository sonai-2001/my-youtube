import React from 'react'

const Button = ({name}) => {
  return (
    <span className='p-2 text-[10px] md:text-lg rounded-lg bg-zinc-300 mx-5'>
        {name}
    </span>
  )
}

export default Button