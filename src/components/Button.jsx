import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-1 bg-gray-300 rounded-md mx-4'>{name}</button>
    </div>
  )
}

export default Button