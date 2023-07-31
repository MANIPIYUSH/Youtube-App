import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch ,useSelector } from 'react-redux'
import { addMessage } from "../utils/ChatSlice";

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)


    useEffect(()=>{
        const i =  setInterval(()=>{

            console.log("Api Pollling");

            dispatch(
                addMessage({
                    name:"Piyush Mani",
                    message:"lorem ipsum dolor site amet",
                })
            );
   //Api polling
          },2000)
          return ()=>clearInterval(i);

    },[])


  return (
    <div className='w-full h-[600px] m-2 p-2 border border-black bg-gray rounded-lg'>
     {

        chatMessages?.map((c,i)=>(
            <ChatMessage key={i}  name={c.name} message={c.message} />
        ))
     }


    </div>
  )
}

export default LiveChat