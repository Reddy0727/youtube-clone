import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchVideos } from '../redux/actions/getSearchVideos'
import { useParams } from 'react-router-dom'
import { resetSearchVideos, setSearchValue } from '../redux/slices/searchSlice'
import Videos from '../components/Videos'

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const {searchValue,videos} = useSelector((state)=>state.search)
  const dispatch = useDispatch()
  useEffect(()=>{
    if (searchTerm) {
      if(videos) dispatch(resetSearchVideos());
      dispatch(setSearchValue(searchTerm))
      dispatch(getSearchVideos(false));
    }
  },[dispatch,searchTerm])
  return (
    <div>
      {videos.length>0 && (
        <Videos videos={videos} direction='row' next={getSearchVideos}/>
      )}
    </div>
  )
}

export default SearchFeed
