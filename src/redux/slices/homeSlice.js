import { createSlice } from "@reduxjs/toolkit";
import { getHomeVideos } from "../actions/getHomeVideos";

const homeSlice = createSlice({
    name:'home',
    initialState:{
        videos:[],
        loading:false,
        error:null,
        nextPageToken:null
    },
    extraReducers:(builer) => {
        builer
        .addCase(getHomeVideos.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(getHomeVideos.fulfilled,(state,action)=>{
            state.loading =false;
            state.nextPageToken = action.payload.nextPageToken;
            state.videos = [...state.videos,...action.payload.items]
        })
        .addCase(getHomeVideos.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default homeSlice.reducer