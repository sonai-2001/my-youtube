import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  return (
    <div className="p-5 py-6 h-[90%] flex  items-center justify-center flex-wrap overflow-y-auto scrollbar-hide">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
