import React, { useEffect, useState } from "react";
import useVideo from "../hooks/useVideo";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuClose } from "../utils/toggleSlice";

const VideoContainer = () => {
  const data = useVideo();
  const dispatch=useDispatch()
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    if (data) {
      setVideos(data);
    }
  }, [data]);

  if (videos) {
    return (
      <div className="p-5 py-6 h-[90%] flex  outline-none items-center justify-center flex-wrap overflow-y-auto scrollbar-hide">
        {videos.map((v) => (
          <Link onClick={()=>dispatch(menuClose())} to={"watch?v="+v.id} key={v.id}>
            {" "}
            <VideoCard snippet={v.snippet} statistics={v.statistics} />
          </Link>
        ))}
      </div>
    );
  }
};

export default VideoContainer;
