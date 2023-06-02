import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard';
import {YOUTUBE_API_URL} from '../utils/constant';

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
      {videos.map(video => <VideoCard key ={video.id} info={video}/>)}
    
    </div>
  )
}

export default VideoContainer
