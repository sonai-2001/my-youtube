import React, { useEffect, useState } from "react";
import { replies_api } from "../utils/constants";

const Comment = ({ details }) => {
  const { authorDisplayName, textDisplay,  authorProfileImageUrl } =
    details?.snippet?.topLevelComment?.snippet;
    const{id}=details
    
    // it store thr replies for the comments which has any reply , it come from the below useEffect
    const[replies,setReplies]=useState(null)
   useEffect(()=>{
    const getReplies=async()=>{
    const raw=await fetch(replies_api+id)
    const data=await raw.json()
    console.log(data)
    setReplies(data.items)
    }
    getReplies()
   },[])
  return (
    <div>
      <div className="w-full flex items-center gap-4 mt-2">
      
       <span className="rounded-full overflow-hidden w-8 h-8">
          <img className="object-cover  w-full h-full" src={ authorProfileImageUrl} alt="" />
        </span>
      

        <div>
          <h1>{authorDisplayName}</h1>
          <p className="text-xs">{textDisplay}</p>
        </div>
      </div>
      {replies && replies.length > 0 && (
        <div className="p-3  border-l-2 border-l-black">
          <h3>replies:</h3>
          { replies.map((reply) => <Comment details={{
            snippet: {
              topLevelComment: {
                snippet: {...reply.snippet}
              },
            },
          }} />)}
        </div>
      )}
    </div>
  );
};

export default Comment;
