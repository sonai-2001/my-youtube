import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constants"

const useVideo=()=>{
   const[item,setItem]=useState(null)
   useEffect(()=>{
         
    const  getData=async()=>{
           const raw=await fetch(YOUTUBE_API)  
           const data=await raw.json() 
           console.log(data.items)
           setItem(data.items)
           
    }
    getData();
        
   },[])
   
    return item
}
export default useVideo