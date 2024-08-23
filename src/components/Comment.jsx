import React from 'react'

const Comment = ({details}) => {
  
  const{name,comment,replies}=details
    return (
   <div>
     <div className='w-full flex items-center gap-4 my-3'>
          
          <span>
          <i class="ri-user-fill"></i>
          </span>
       
        <div>
          <h1>{name}</h1>
          <p className='text-xs'>{comment}</p>
        </div>
      </div>
<div className='p-3  border-l-2 border-l-black'>
  {replies.length>0 && replies.map((reply)=>(
    <Comment details={reply} />
  ))}
</div>

   </div>
  )
}

export default Comment