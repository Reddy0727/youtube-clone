import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHomeVideos } from '../redux/actions/getHomeVideos'
import Spinner from '../components/Spinner'
import Videos from '../components/Videos'

const Home = () => {
  const dispatch = useDispatch()
  const { videos} = useSelector((state)=>state.home)

  useEffect(()=>{
    dispatch(getHomeVideos(false))
  },[dispatch])
  return (
    <div>
      {videos.length>0 ? (
        <Videos videos={videos} next={getHomeVideos} />
      ):(
        <Spinner />
      )}
    </div>
  )
}

export default Home
