import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = ()=>{

  const[searchQuery,setSearchQuery] = useState("");
  const[suggestions,setSuggestions] = useState([]);
  const[showSuggestions,setShowSuggestions] = useState(false)

  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();
   
       
  useEffect(()=>{
      const timer = setTimeout(()=>{ 
            if(searchCache[searchQuery]){
              setSuggestions(searchCache[searchQuery])
            }else{
              getSearchSuggestions(); 
            }
          },200)
          return () =>{
            clearTimeout(timer);
           };
             
          },[searchQuery]); 


const getSearchSuggestions = async () => {
  try{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));

  }catch(error){
    console.log(error);
  
    setSuggestions([]);

  }

};



 
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
         <div className="col-span-10 px-10">  
              <div>
              <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
               />
               <button className="border border-gray-400 p-2 px-5 bg-gray-100 rounded-r-full">Search</button>
             </div> 
         
              { showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                   <ul> 

                    {
                       suggestions?.map((s) => (
                           (
                          <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                            {s}
                          </li>
                           )
                          ))  
                    }   
                  </ul>
               </div>)}
           </div>
          <div className="col-span-1">
            <img className="h-8" src="" alt="user-icon" />
          </div>


  </div>
        
  )

}

export default Head;