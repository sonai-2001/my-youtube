import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideToggleSlice";
const Header = () => {
  
  const dispatch=useDispatch()
  const handleHambergerMenu=()=>{
         dispatch(toggleSideBar())
  }
  return (
    <div className="h-[10vh] px-2  py-1 flex items-center justify-between">
     
     {/* logo and hamberger menu */}
      <div className="flex items-center">
        <img onClick={handleHambergerMenu} className="h-4 cursor-pointer md:h-8" src="ham.png" alt="" />
        <img className="h-10 md:h-14 object-cover" src="youtube-logo.png" alt="youtube" />
      </div>
      {/* search bar */}
      <div className="">
        <input
          placeholder="search here"
          className=" outline-none border-[1px] border-r-none border-black text-center w-[30vw] rounded-l-full"
          type="text"
        />
        <button className="border-[1px] border-l-0  border-black rounded-r-full px-[5px]  md:px-1">
          search
        </button>
      </div>
      {/* user */}
      <div>
        <img className="h-8" src="user.png" alt="user" />
      </div> 
    </div>
  );
};

export default Header;
