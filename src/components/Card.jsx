  import React from 'react';
  import { Link } from "react-router-dom";

  const formatDuration = (isoDuration) => {
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? match[1].slice(0, -1) : '';
    const minutes = match[2] ? match[2].slice(0, -1) : '0';
    let seconds = match[3] ? match[3].slice(0, -1) : '00';
    seconds = seconds.padStart(2, '0');
    
    return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
  };

  const formatViewCount = (views) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1,
    }).format(views);
  };

  const Card = ({ data, direction,search }) => {
    const videoId = data?.id?.videoId || data?.id
    const videoTitle = data?.snippet?.title || "Video Title";
    const channelTitle = data?.snippet?.channelTitle || "Channel Name";
    const thumbnail = data?.snippet?.thumbnails?.standard?.url || data?.snippet?.thumbnails?.high?.url || "";
    const channelThumbnail = data?.channelInfo?.thumbnails?.default?.url || "";
    const viewCount = formatViewCount(data?.statistics?.viewCount || data?.videoInfo?.statistics?.viewCount || 0);
    const duration = data?.contentDetails?.duration
      ? formatDuration(data.contentDetails.duration || data?.videoInfo?.statistics?.viewCount)
      : "N/A";

    return (
      <div className={`${direction==='row' ? 'flex gap-3 h-[14rem] sm:px-10 px-4' :search ? 'flex lg:w-[20rem] h-[6rem] lg:gap-2 gap-4' : 'card_info'} `}>
         <div className={`overflow-hidden rounded-lg mb-2 ${search && 'w-1/3 lg:w-full '}`}>
           <Link to={`/watch/${videoId}`} >
              <img
                src={thumbnail}
                alt={videoTitle}
                className={`${direction==='row' ? 'scale-y-125 bottom-6':search ? ' bottom-1 scale-y-125 ' : ''} scale-115 object-cover object-bottom relative bottom-7  `}
              />
            </Link>
         </div>
         <div className='flex gap-4 text-gray-500'>
        { (direction !== 'row' && !search) && (<div className="h-9 w-9 rounded-full overflow-hidden">
             <Link to="#">
              <img
                src={channelThumbnail}
                alt={channelTitle}
              />
            </Link>
          </div>)}
          <div className={`flex flex-col ${direction==='row' && 'p-4 gap-1'}`} >
           <h3>
              <Link to="#" className={`text-[14px]  font-semibold text-white line-clamp-2`}>
                {videoTitle}
              </Link>
            </h3>
            <span className={`text-[12px] ${direction==='row' && 'order-1 pt-2 text-[16px]'}`}>
              <Link to='#'>
                 {direction === 'row' ? (
                  <div className='flex gap-4 items-center tex'>
                      <img
                        src={channelThumbnail}
                        alt={channelTitle}
                        className="h-8 w-8 rounded-full overflow-hidden"
                      />
                      {channelTitle}
                   </div> ): channelTitle}
                   
              </Link>
            </span>
            <span className={`text-[12px] ${direction==='row' && 'order-0'}`}>
                  {viewCount} views  {''} {}
              </span>
              {direction==='row' && (
                  <p className='text-[13px]'>{data?.snippet?.description}</p>
                )}

          </div>
         </div>
      </div>
    );
  };

  export default Card;
