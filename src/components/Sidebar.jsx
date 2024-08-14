import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  
  const isMenuOpen=useSelector(store=>store.toggle.isMenuOpen)
  console.log(isMenuOpen)
  if(!isMenuOpen){
    return null
  }
  return (
    <div className='w-[15vw] h-[90vh] shadow-xl'></div>
  )
}

export default Sidebar