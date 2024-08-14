import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuOpen } from '../utils/toggleSlice'

const Header = () => {
  
  const dispatch=useDispatch()
  const handleMenu=()=>{
        dispatch(toggleMenuOpen())
  }
  
  return (
    <div className='w-[100vw] h-[10vh] shadow-xl px-3 py-1 flex items-center justify-between'>
          {/*logo and menu  */}
          <div className='flex items-center gap-2'>
           <img onClick={handleMenu} className=' cursor-pointer w-[20px]md:w-[50px] h-[20px] md:h-[50px]' src="hamberger.png" alt="" />
           <img  className='h-[50px] object-cover' src="youtube-logo.png" alt="" />
          </div>
          {/* search bar */}
          <div>
            <input type="text" placeholder='search here'className='text-center border border-gray-300 rounded-l-full outline-none w-[100px] md:w-[30vw]' />
            <button className=' border border-gray-300 rounded-r-full pr-1'>search</button>
          </div>
          {/* user logo */}
          <div>
          <span>
          <img className='  h-[40px]' src="user.png" alt="" />  
          </span>  
          </div> 
    </div>
  )
}

export default Header