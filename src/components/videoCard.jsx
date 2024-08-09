import React from "react";

const VideoCard = ({ info }) => {
  console.log(info.snippet.thumbnails);
  const { snippet, statistics } = info;
  const { thumbnails, title } = snippet;
  const { medium } = thumbnails;
  const { viewCount } = statistics;

  return (
    <div className=" md:w-[25vw] border rounded-md mx-4 my-2 shadow-lg">
      <img className="rounded-md" src={medium.url} alt="" />
      <h1 className={`w-full font-semibold`}>{title}</h1>
      <h4>{viewCount} views</h4>
    </div>
  );
};

export default VideoCard;
