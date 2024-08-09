import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.side.isSideBarOpen);
  console.log(isSideBarOpen);
  if (!isSideBarOpen) {
    return (
      <div className=" shadow-lg   border-r-[1px] absolute md:static md:h-[90vh] h-[100vh] top-0  px-3 md:px-7">
        <div className=" md:my-3">
          <i className="ri-home-5-fill text-xl md:text-2xl "></i>
        </div>
        <div className="my-3">
          <i class="ri-video-add-fill text-xl md:-2xl"></i>
        </div>
        <div className="my-3">
          <i class="ri-movie-fill text-xl md:text-2xl"></i>
        </div>
      </div>
    );
  }
  return (
    <div className=" shadow-xl h-[90vh] w-[30vw] bg-white md:w-[10vw] border-r-[1px] absolute md:static  ">
      <div className="flex items-center my-3 justify-between pl-6 pr-14 bg-slate-50 hover:bg-slate-100 rounded-md">
        <i className="ri-home-5-fill text-xl md:text-2xl "></i>
        <h1 className="  text-xs  w-[3vw] ml-2">Home</h1>
      </div>
      <div className="flex items-center my-3 justify-between pl-6 pr-14 bg-slate-50 hover:bg-slate-100 rounded-md">
      <i class="ri-video-add-fill text-xl md:-2xl"></i>
        <h1 className="text-xs w-[3vw] ml-2">Subscription</h1>
      </div>
      <div className="flex items-center my-3 justify-between pl-6 pr-14 bg-slate-50 hover:bg-slate-100 rounded-md">
      <i class="ri-movie-fill text-xl md:text-2xl"></i>
        <h1 className="text-xs w-[3vw] ml-2 ">Shorts</h1>
      </div>
      
      
    </div>
  );
};

export default SideBar;
