import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../../utilities/api";
import { parseData } from "../../utilities/parseData";

export const getHomeVideos = createAsyncThunk(
    'home/getHomeVideos',
    async(isNext,{getState,rejectWithValue}) => {
        try {

            const {home:{nextPageToken}} = getState()
            const token = isNext ? nextPageToken : '';
            const {data} = await apiRequest.get('/videos',{
                params:{
                    part:'snippet,contentDetails,statistics',
                    chart:'mostPopular',
                    maxResults:20,
                    pageToken:token,
                }
            })
            const videoWithChannelInfo = await parseData(data.items); 
            return {items:videoWithChannelInfo,nextPageToken:data.nextPageToken}

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)