import React from "react";

const VideoCard = ({ snippet, statistics }) => {
  // console.log(snippet.description.split(" ").length)
  // console.log(snippet)
  return (
    <div className=" w-[60vw] md:w-[25vw] h-[40vh] md:h-[45vh] p-2   overflow-hidden">
      {/* for image or thumbnail */}
      <div className="w-full h-[70%]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={snippet.thumbnails.medium.url}
          alt="pic"
        />
      </div>
      {/* description */}
      <div className="pl-2 text-sm md:text-md">
        {snippet.title.split(" ").length>10?snippet.title.split(" ").slice(0,15).join(" ")+".....":snippet.title}
      </div>
      {/* views */}
      <h3 className="pl-2 text-sm">{statistics.viewCount} views</h3>
    </div>
  );
};

export default VideoCard;
