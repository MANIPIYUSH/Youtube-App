import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
           <img className='h-8' src="https://yt3.ggpht.com/yti/AOXPAcVdJowYwtYQwzW2ahybRRWs_JPA9aJ3KgNNIS8s3nI=s88-c-k-c0x00ffffff-no-rj" alt='icon'/>
            <span className="font-bold px-2 mr-2">{name}</span>
            <span>{message}</span>

    </div>
  )
}

export default ChatMessage