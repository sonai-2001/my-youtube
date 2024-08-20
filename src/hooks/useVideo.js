// its work is to bring the videos from the youtube database..

import { useEffect, useState } from "react";
import {YOUTUBE_API} from "../utils/constants"

const useVideo=()=>{
    
    const [videos,setVideos]=useState(null)
    useEffect(()=>{
    const getVideos=async ()=>{
        const data=await fetch(YOUTUBE_API)
        const json=await data.json()
        console.log(json.items)
        setVideos(json.items)
    }
        getVideos();
    },[])

    return videos
}

export default useVideo;