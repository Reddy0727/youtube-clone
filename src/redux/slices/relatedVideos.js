import { createSlice } from "@reduxjs/toolkit";
import { getHomeVideos } from "../actions/getHomeVideos";
import { getRelatedVideos } from "../actions/getRelatedVideos";

const relatedVideosSlice = createSlice({
    name:'relatedVideos',
    initialState:{
        videos:[],
        videoDetails:[],
        loading:false,
        error:null,
        nextPageToken:null
    },
    reducers:{
         resetData(state)  {
            state.videos = []
         }
    },
    extraReducers:(builer) => {
        builer
        .addCase(getRelatedVideos.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(getRelatedVideos.fulfilled,(state,action)=>{
            state.loading =false;
            state.nextPageToken = action.payload.nextPageToken;
            state.videos = [...state.videos,...action.payload.items]
            state.videoDetails = [...action.payload.videoInfo]
        })
        .addCase(getRelatedVideos.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})
export const {resetData} = relatedVideosSlice.actions
export default relatedVideosSlice.reducer