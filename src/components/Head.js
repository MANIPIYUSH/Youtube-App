import React from "react";
import { useDispatch } from "react-redux";
import {toggleMenu} from "../utils/appSlice";

const Head = ()=>{
  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
  };
  return( 
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
          <div className="flex col-span-1">
            <img 
            onClick={()=>toggleMenuHandler()}
            className="h-8 cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" alt="menu-icon" />
            <img className="h-8 mx-2" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtube-logo" />
          </div>
         <div className="flex justify-center col-span-10">
           <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
           <button className="border border-gray-400 p-2 px-5 bg-gray-100 rounded-r-full">🔍</button>
         </div>
          <div className="col-span-1">
            <img className="h-8" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="user-icon" />
          </div>


        </div>
  )

}

export default Head;