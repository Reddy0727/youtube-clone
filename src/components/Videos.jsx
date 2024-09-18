import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import Card from './Card';
import { useDispatch } from 'react-redux';

const Videos = ({videos, search,direction,next}) => {
    const dispatch = useDispatch()
  return (
    <div>
      {videos ? (
        <InfiniteScroll
            dataLength={videos.length}
            next={()=>dispatch(next(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
        >
            <div className={`${search ? 'mb-3' :direction ? 'flex  flex-col gap-4' : 'card'}`}>
              {videos.map((item,i) => {
                return <Card data={item} key={i} search={search} direction={direction}/>;
              })}
            </div>
       </InfiniteScroll>
    ):(<Spinner />)}
    </div>
  )
}

export default Videos
