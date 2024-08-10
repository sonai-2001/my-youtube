import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// it is the function to make the sidebar close..
import { closeSideBar } from "../utils/sideToggleSlice";
import { useDispatch } from "react-redux";


const Watch = () => {
  //   use watch search param for find the search param value

  const searchparam = useSearchParams();
  console.log(searchparam);
  const [urlSearchParam] = searchparam;
  console.log(urlSearchParam.get("v"));
  const watchId = urlSearchParam.get("v");
  // dispatch function to dispatch the closeSidebar function automaticaly when this watch page rendered..
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(closeSideBar())
  },[])
  return (
    <div className="rounded-md">
      <iframe
        className="  ml-16 md:ml-20 rounded-md w-[70vw] md:w-[60vw] h-[50vh] md:h-[70vh]"
        
        src={"https://www.youtube.com/embed/" + watchId + "?autoplay=1"}
        title="YouTube video player"
        frameborder="0"
        allow="fullscreen; autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

        // referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        
      ></iframe>
    </div>
  );
};

export default Watch;
