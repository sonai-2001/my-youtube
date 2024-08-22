import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuOpen } from "../utils/toggleSlice";
import { Link } from "react-router-dom";
import { search_api } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const[open,setOpen]=useState(false)
  const [items,setItems]=useState(null)
  useEffect(()=>{
    
    const getData=async ()=>{
      if(search==="")
      {
        return
      }
      console.log("getData called")
      const raw=await fetch(search_api+search)
      const data=await raw.json()
      console.log(data.items)
      setItems(data.items)
     }
          const timer=setTimeout(()=>{
           getData()
           },700)

          return ()=>{
            clearTimeout(timer)
          }
  },[search])
  const handleMenu = () => {
    dispatch(toggleMenuOpen());
  };
   const handleChange=(e)=>{
           
    
    if(e.target.value.trim()==""){
               
      setOpen(false)
      return
           } 
           setOpen(true)
           setSearch(e.target.value)
          
 }

  return (
    <div className="w-[100vw] h-[10vh] shadow-xl px-3 py-1 flex items-center justify-between">
      {/*logo and menu  */}
      <div className="flex items-center gap-2">
        <img
          onClick={handleMenu}
          className=" cursor-pointer w-[20px]md:w-[50px] h-[20px] md:h-[50px]"
          src="hamberger.png"
          alt=""
        />
        <Link to="/">
          <img
            className="h-[50px] object-cover"
            src="youtube-logo.png"
            alt=""
          />
        </Link>
      </div>
      {/* search bar */}
      <div 
      
      className="relative">
        <input
          type="text"
          onChange={handleChange}
   

        
          placeholder="search here"
          className="text-center border border-gray-300 rounded-l-full outline-none w-[100px] md:w-[30vw]"
        />
        <button className=" border border-gray-300 rounded-r-full px-2">
          <i className="ri-search-line"></i>
        </button>
        {/* search results */}
        {open &&  (
          <div
            className="absolute w-full max-h-[40vh] md:max-h-[70vh] bg-white rounded-md 
          p-2 overflow-y-auto "
          >
            {items ?(
              items.map((i)=>{
                     return(
                     <Link onClick={()=>setOpen(false)} to={`/watch?v=${i.id.videoId}`}>

                           <div className="w-full flex justify-between items-center py-2  bg-slate-100">
              <h5 className=" text-xs md:text-sm">{i.snippet.channelTitle
              }</h5>

              <div className="w-[4vw] h-[3vw]">
                <img
                  className="w-full h-full object-cover"
                  src={i.snippet.thumbnails.medium.url}
                  alt=""
                />
              </div>
            </div>
                     </Link>
                     )
              })
            ):(
              <div className="w-full flex justify-center items-center py-2  bg-slate-100">
                           Loading..... 
              </div>
            )}
            
          </div>
        )}
      </div>
      {/* user logo */}
      <div>
        <span>
          <img className="  h-[40px]" src="user.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Header;
