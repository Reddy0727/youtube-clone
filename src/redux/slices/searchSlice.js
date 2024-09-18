import { createSlice } from "@reduxjs/toolkit";
import { getSearchVideos } from "../actions/getSearchVideos";

const searchSlice = createSlice({
    name:'search',
     initialState :{
        searchValue: '',
        videos: [],
        loading: false,
        error: null,
        nextPageToken: null
      },
    reducers:{
        setSearchValue(state,action) {
            state.searchValue = action.payload
        },
        resetSearchVideos(state,action) {
            state.videos=[]
        }
    },
    extraReducers:(builer) => {
        builer
        .addCase(getSearchVideos.pending,(state)=>{
            state.loading = true;
            state.error=null;
        })
        .addCase(getSearchVideos.fulfilled,(state,action)=>{
            state.loading =false;
            state.nextPageToken = action.payload.nextPageToken;
            state.videos = [...state.videos,...action.payload.items]
        })
        .addCase(getSearchVideos.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})
export const {setSearchValue,resetSearchVideos} = searchSlice.actions;
export default searchSlice.reducer;