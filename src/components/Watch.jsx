import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { comment_api, videoUrl } from "../utils/constants";
import Comment from "./Comment";

const Watch = () => {
  const demo = useSearchParams();
  console.log(demo[0].get("v"));
  const videoId = demo[0].get("v");
  const dummy=[
    {
    id:1,
    name:"John Doe",
    comment:"This is a great video",
    replies:[
      {
        id:1.1,
        name:"Jane Doe",
        comment:"I agree",
        replies:[
        ]
      }
    ]
  },
  {
    id:2,
    name:"Jane Doe",
    comment:"This is a bad video",
    replies:[
    ]
  }
]
  useEffect(()=>{
        
    const getData=async ()=>{
         const raw=  await fetch(comment_api+videoId)
         const data=await raw.json()
         console.log(data)
    }
    getData()
  },[])
  return (
    <div className="w-[100vw] md:w-[94vw] p-6 pl-8 ">
      <div className="flex-col">
      <iframe
        className=" w-[100%] md:w-[50vw] h-[40%] md:h-[60vh] rounded-md"
        src={videoUrl+videoId+"?autoplay=1"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
     
     {/* comment section */}
      <div  className="w-[100%] md:w-[50vw] p-3 bg-red-300 rounded-md mt-4">
              
              <h1 className="text-xl font-semibold">Comments:</h1>
              {dummy.map((c,index)=>{
                    return(
                      <Comment details={c} key={c.id}/>
                    )
              })}
               
      </div>

      </div>
    </div>
  );
};

export default Watch;
