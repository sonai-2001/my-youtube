import React from "react";
import { useSearchParams } from "react-router-dom";
import { videoApi } from "../utils/constants";

const Watch = () => {
  const demo = useSearchParams();
  console.log(demo[0].get("v"));
  const videoId = demo[0].get("v");
  return (
    <div className="w-[100vw] md:w-[94vw] h-screen p-6 pl-8 ">
      <iframe
        className=" w-[100%] md:w-[50vw] h-[40%] md:h-[60vh] rounded-md"
        src={videoApi+videoId+"?autoplay=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
