import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard';
import {YOUTUBE_API_URL} from '../utils/constant';
import { Link } from 'react-router-dom';
function VideoContainer() {
 const [videos, setVideos] = useState([]);
  useEffect(()=>{
     getVideos();
  },[]);

  const getVideos = async ()=>{
    const data = await fetch( YOUTUBE_API_URL );
    //console.log(data);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }


  return (
    <div className='flex flex-wrap'>
      {
          videos?.map((video) =>
          (
          <Link key ={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video}/>
          </Link>
          ))}
                    
      
    
    </div>
  );
};

export default VideoContainer
