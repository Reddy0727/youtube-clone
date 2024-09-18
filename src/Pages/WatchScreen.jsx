import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideos } from '../redux/actions/getRelatedVideos';
import { resetData } from '../redux/slices/relatedVideos';
import Videos from '../components/Videos';

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { videos, videoDetails } = useSelector((state) => state.relatedVideos);
  useEffect(() => {
    if(videos.length>0) dispatch(resetData())
    dispatch(getRelatedVideos({ videoId: id, isNext: false }));
  }, [dispatch, id]);
  console.log(videoDetails)
  return (
    <div className='flex flex-col  lg:flex-row gap-4'>
      <div className='lg:w-[70%] w-full h-[50vh] lg:h-[75vh] rounded-xl'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          playing={true}
          width="100%"   
          height="100%"  
        />
        <div className='p-2'>
          <h4 className='line-clamp-1'>{videoDetails[0]?.snippet?.title}</h4> 
        </div>
      </div>
     <div>
 
      {videos.length>0 && (
        <Videos videos={videos} search={true} next={getRelatedVideos}/>
      )}
      </div>
    </div>
  );
};

export default WatchScreen;
